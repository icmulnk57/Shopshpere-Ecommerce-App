import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import favicon from "../../components/Layout/favicon.png";
import { BASE_URL } from "../../url";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(BASE_URL+"/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Forgot Password - Ecommerce APP">
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-8">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body  p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-2 pb-0">
                          <img src={favicon} alt="logo" />
                          <span className="h2 fw-bold  ms-1 mb-0">Reset Password</span>
                        </div>
  
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                          Reset your password
                        </h5>
  
                        <div className="form-outline mb-2">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                        </div>
  
                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            id="answer"
                            className="form-control form-control-sm"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label className="form-label" htmlFor="answer">
                            Favorite Sport Name
                          </label>
                        </div>
  
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            id="newPassword"
                            className="form-control form-control-sm"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label className="form-label" htmlFor="newPassword">
                            New Password
                          </label>
                        </div>
  
                        <button className="btn btn-yellow3" type="submit">
                          RESET
                        </button>
                      </form>
                    </div>
                  </div>
  
                  <div className="col-md-6 col-lg-4 my-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForgotPasssword;
