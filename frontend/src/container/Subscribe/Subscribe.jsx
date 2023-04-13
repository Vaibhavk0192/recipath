import React from "react";
import "./subscribe.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const [email, setEmail] = React.useState("");

  const detectChange = (event) => {
    setEmail(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/subscribe", {
        email: email,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Subscribed Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Subscription Failed!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        }

        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      })
      .catch((err) => {
        toast.error("Error! Please try again later!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <div className="app__box">
      <div className="design_box1"></div>
      <div className="design_box2"></div>


        <div className="app__newsletter-heading">
          <h1 className="news_letters">NEWSLETTER</h1>
          <div className="Down_newsletters">Never miss latest updates</div>
        </div>
        <form onSubmit={submitForm}>
          <div className="app__subscribe-inputbox">
            <input
              id="emailAddress"
              type="email"
              required
              value={email}
              placeholder="Enter your Email Address"
              onChange={detectChange}
              className="app__newsletter-emailbox"
            />
            <input type="submit" className="app__newsletter-button" />
          </div>
        </form>
      <div className="design_box3"></div>
      <div className="design_box4"></div>
      </div>
      <ToastContainer />
      </div>

  );
};
export default Subscribe;
