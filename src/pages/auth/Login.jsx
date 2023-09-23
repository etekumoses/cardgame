import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/userSlice";

const Login = () => {
  const bgstyle = {
    height: "100%",

    backgroundColor: "#c42a29",
  };
  const logostyle = {
    height: "150px",
  };

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // dispatch(reset());
    if (isError && message) {
      toast.error(message);
    }
    if (!isLoading && isSuccess) {
      navigate("/");
    }
  }, [isLoading, isError, isSuccess, navigate, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      toast.error("Email is required");
    } else if(!password) {
      toast.error("Password is required");
    }
    if (!isLoading) {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };

  useEffect(() => {
    if (!isLoading) {
      // if (user?.user.role === "Transcriber") {
      //   navigate("/transcription/home");
      // } else if (user?.user.role === "Reviewer") {
      //   navigate("/review/home");
      // } else {
        console.log(user);
        if (user?.token != null) {
        navigate("/option");
      }else{
        navigate("/");
      }
    }
  }, [user, navigate]);

  var imageUrl = "public/assets/admin/svg/components/card-6.svg";
  const styles = {
    backgroundImage: `url(${imageUrl})`,
    height: "32rem",
  };
  const divStyles = {
    width: "32rem",
  };
  return (
    <div>
        <div className="container py-10 py-sm-10">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="card card-lg mb-5">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="text-start">
                      <a className="d-flex justify-content-center mb-5">
                        <img
                          className="z-index-2 "
                          src="assets/frontend/img/logo.png"
                          width="150px"
                          height="80px"
                          alt="Logo"
                          // style={logostyle}
                        />
                      </a>
                      <div className="mb-5">
                        <h1 className="display-4"> Login</h1>
                        <p>Please login to continue</p>
                      </div>
                    </div>

                    <div className="js-form-message form-group mb-4">
                      <label className="input-label text-capitalize">
                        email
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="email"
                        placeholder="Enter Email"
                        required
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="js-form-message form-group mb-4">
                      <label className="input-label">
                        <span className="d-flex justify-content-between align-items-center">
                          Password
                        </span>
                      </label>

                      <div className="input-group input-group-merge">
                        <input
                          className="js-toggle-password form-control form-control-lg"
                          placeholder="Enter password"
                          required
                          type="password"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                      </div>
                    </div>
                    {errMsg && (
                      <div
                        className="flex  mb-4 text-sm text-red "
                        role="alert"
                        ref={errRef}
                      >
                        <div>
                          <span className="font-medium">Error! </span>
                          {errMsg}
                        </div>
                      </div>
                    )}
                    <div className="text-end m-3">
                      <NavLink to="/forgot-password">
                      <p>Forgot Password?</p></NavLink>
                    </div>
                   
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg bg-primary"
                      >
                        {isLoading ? "Loading..." : "Login"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;
