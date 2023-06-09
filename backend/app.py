import json
import tensorflow as tf
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import numpy as np
import os

# Dataset


def load_dataset(silent=False):
    # List of dataset files we want to merge.
    dataset_file_names = [
        'recipes_raw_nosource_ar.json',
        'recipes_raw_nosource_epi.json',
        'recipes_raw_nosource_fn.json',
    ]

    dataset = []

    for dataset_file_name in dataset_file_names:
        dataset_file_path = f'../model/tmp/datasets/{dataset_file_name}'

        with open(dataset_file_path) as dataset_file:
            json_data_dict = json.load(dataset_file)
            json_data_list = list(json_data_dict.values())
            dict_keys = [key for key in json_data_list[0]]
            dict_keys.sort()
            dataset += json_data_list

            # This code block outputs the summary for each dataset.
            # if silent == False:
            #     print(dataset_file_path)
            #     print('===========================================')
            #     print('Number of examples: ', len(json_data_list), '\n')
            #     print('Example object keys:\n', dict_keys, '\n')
            #     print('Example object:\n', json_data_list[0], '\n')
            #     print('Required keys:\n')
            #     print('  title: ', json_data_list[0]['title'], '\n')
            #     print('  ingredients: ',
            #           json_data_list[0]['ingredients'], '\n')
            #     print('  instructions: ', json_data_list[0]['instructions'])
            #     print('\n\n')

    return dataset


dataset_raw = load_dataset(True)


# Dataset Validation and Filtering
def recipe_validate_required_fields(recipe):
    required_keys = ['title', 'ingredients', 'instructions']

    if not recipe:
        return False

    for required_key in required_keys:
        if not recipe[required_key]:
            return False

        if type(recipe[required_key]) == list and len(recipe[required_key]) == 0:
            return False

    return True


dataset_validated = [
    recipe for recipe in dataset_raw if recipe_validate_required_fields(recipe)]

STOP_WORD_TITLE = '📗 '
STOP_WORD_INGREDIENTS = '\n🥕\n\n'
STOP_WORD_INSTRUCTIONS = '\n📝\n\n'


def recipe_to_string(recipe):
    # This string is presented as a part of recipes so we need to clean it up.
    noize_string = 'ADVERTISEMENT'

    title = recipe['title']
    ingredients = recipe['ingredients']
    instructions = recipe['instructions'].split('\n')

    ingredients_string = ''
    for ingredient in ingredients:
        ingredient = ingredient.replace(noize_string, '')
        if ingredient:
            # adding bullets to structure the data
            ingredients_string += f'• {ingredient}\n'

    instructions_string = ''
    for instruction in instructions:
        instruction = instruction.replace(noize_string, '')
        if instruction:
            # adding bullets to structure the data
            instructions_string += f'▪︎ {instruction}\n'

    return f'{STOP_WORD_TITLE}{title}\n{STOP_WORD_INGREDIENTS}{ingredients_string}{STOP_WORD_INSTRUCTIONS}{instructions_string}'


dataset_stringified = [recipe_to_string(
    recipe) for recipe in dataset_validated]
MAX_RECIPE_LENGTH = 2000


def filter_recipes_by_length(recipe_test):
    return len(recipe_test) <= MAX_RECIPE_LENGTH


dataset_filtered = [
    recipe_text for recipe_text in dataset_stringified if filter_recipes_by_length(recipe_text)]


# Building Model
def build_model(vocab_size, embedding_dim, rnn_units, batch_size):
    model = tf.keras.models.Sequential()

    model.add(tf.keras.layers.Embedding(
        input_dim=vocab_size,
        output_dim=embedding_dim,
        batch_input_shape=[batch_size, None]
    ))

    model.add(tf.keras.layers.LSTM(
        units=rnn_units,
        return_sequences=True,
        stateful=True,
        recurrent_initializer=tf.keras.initializers.GlorotNormal()
    ))

    model.add(tf.keras.layers.Dense(vocab_size))

    return model


# Loading model into the architecture
simplified_batch_size = 1
filepath_of_trained_model = "Model\Model.h5"
VOCABULARY_SIZE = 176
model_simplified = build_model(
    VOCABULARY_SIZE, 256, 1024, simplified_batch_size)
model_path = os.path.join(
    os.getcwd(), filepath_of_trained_model).replace("\\", "/")
model_simplified.load_weights(model_path)
model_simplified.build(tf.TensorShape([simplified_batch_size, None]))
# model_simplified.summary()
tokenizer = tf.keras.preprocessing.text.Tokenizer(
    char_level=True,
    filters='',
    lower=False,
    split=''
)


# Stop word is not a part of recipes, but tokenizer must know about it as well.
STOP_SIGN = '␣'

tokenizer.fit_on_texts([STOP_SIGN])
tokenizer.fit_on_texts(dataset_filtered)
tokenizer.get_config()


# Generating Output
def generate_text(model, start_string, num_generate=1000, temperature=1.0):
    # Evaluation step (generating text using the learned model)
    padded_start_string = STOP_WORD_TITLE + start_string
    # Converting our start string to numbers (vectorizing).
    input_indices = np.array(
        tokenizer.texts_to_sequences([padded_start_string]))
    # Empty string to store our results.
    text_generated = []
    # Here batch size == 1.
    model.reset_states()
    for char_index in range(num_generate):
        predictions = model(input_indices)
        # remove the batch dimension
        predictions = tf.squeeze(predictions, 0)
        # Using a categorical distribution to predict the character returned by the model.
        predictions = predictions / temperature
        predicted_id = tf.random.categorical(
            predictions,
            num_samples=1
        )[-1, 0].numpy()

        # We pass the predicted character as the next input to the model
        # along with the previous hidden state.
        input_indices = tf.expand_dims([predicted_id], 0)

        next_character = tokenizer.sequences_to_texts(input_indices.numpy())[0]

        text_generated.append(next_character)

    return (padded_start_string + ''.join(text_generated))


app = Flask(__name__)
CORS(app)
print("Server Started!!")

image_select = True


def generate_combinations(model, ingredients_list):
    recipe_length = 4000
    try_letters = ingredients_list
    try_temperature = [0.2, 0.9]

    ans = dict()
    ans[0] = []

    global image_select

    for letter in try_letters:

        if image_select == True:
            idx = 0
        else:
            idx = 11

        for temperature in try_temperature:
            generated_text = generate_text(
                model,
                start_string=letter,
                num_generate=recipe_length,
                temperature=temperature
            )

            title = ""
            ingredients = ""
            recipe = ""

            i = 0
            while i < len(generated_text) and (generated_text[i]) != "\n":
                title += generated_text[i]
                i += 1
            title.strip()

            while i < len(generated_text) and generated_text[i] != "•":
                i += 1
            if i == len(generated_text):
                continue

            while i+1 < len(generated_text) and (generated_text[i] + generated_text[i+1]) != "\n\n":
                ingredients += generated_text[i]
                i += 1
            i += 4
            ingredients.strip()

            while i < len(generated_text) and generated_text[i] != "▪":
                i += 1
            if i == len(generated_text):
                continue

            while i < len(generated_text) and (generated_text[i]) != "␣":
                recipe += generated_text[i]
                i += 1
            recipe.strip()

            # Ingredients Duplicate Removal
            original_ingredients = ingredients_list[0].split()
            original_ingredients = [("• " + ingredient + "\n")
                                    for ingredient in original_ingredients]
            ingredients = ingredients.split('\n')
            ingredients.extend(original_ingredients)
            ingredients = list(set(ingredients))
            ans[0].append({'RecipeTitle': title[2:],
                          'Ingredients': ingredients, 'Steps': recipe.split("\n"), })

            if image_select == True:
                idx += 1
            else:
                idx -= 1

    return ans


@app.route('/api/recipe', methods=["POST"])
def home():
    print("Running Ingredients-to-Recipe Function...")

    ingredients_l = request.json
    ingredients_list = ingredients_l['ingredients']
    print(ingredients_list)

    ans = generate_combinations(model_simplified, ingredients_list)
    return make_response(jsonify(ans[0][0]))


app.run(port=4000)
