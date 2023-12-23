import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import favicon from "../../components/Layout/favicon.png";
import { BASE_URL } from "../../url";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(BASE_URL+"/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
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
    <Layout title="Register - SHOPSPHERE">
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
                          {/* <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i> */}
                          <img src={favicon} alt="logo" />
                          <span className="h1 fw-bold mb-0">Register</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Register for an account
                        </h5>
                        

                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            id="name"
                            className="form-control form-control-sm"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="exampleInputName"
                          >
                            Name
                          </label>
                        </div>
                         

                        <div className="form-outline mb-2">
                          <input
                            type="email"
                            id="exampleInputEmail1"
                            className="form-control form-control-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="exampleInputEmail1"
                          >
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            id="exampleInputPassword1"
                            className="form-control form-control-sm"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="exampleInputPassword1"
                          >
                            Password
                          </label>
                        </div>

                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            id="exampleInputPhone"
                            className="form-control form-control-sm"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="exampleInputPhone"
                          >
                            Phone
                          </label>
                        </div>

                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            id="exampleInputAddress"
                            className="form-control form-control-sm"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="exampleInputAddress"
                          >
                            Address
                          </label>
                        </div>

                        <div className="form-outline mb-2">
                          <input
                            type="text"
                            id="exampleInputAnswer"
                            className="form-control form-control-sm"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder=""
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="exampleInputAnswer"
                          >
                            Favorite Sports
                          </label>
                        </div>

                        <button
                          className="btn btn-yellow3 "
                          type="submit"
                        >
                          REGISTER
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

export default Register;
