import React from "react";

const ForgotPassword = () => {
  const bgstyle = {
    height: "100%",

    backgroundColor: "#ffffff",
  };
  const logostyle = {
    height: "80px",
    width: "150px"
  };
  return (
    <main id="content" role="main" className="main">
      <div
        className="position-fixed top-0 right-0 left-0 bg-img-hero"
        style={bgstyle}
      ></div>

      <div className="container py-5 py-sm-7">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="card card-lg mb-5">
              <div className="card-body">
                <form id="form-id" action="" method="post">
                  <div className="text-start">
                    <div
                      className="d-flex justify-content-start mb-5"
                  
                    >
                      <img
                        className="z-index-2 "
                        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
                        alt="Logo"
                        style={logostyle}
                      />
                    </div>
                    <div className="mb-5">
                      <h1 className="display-4"> Reset password!</h1>
                      <p>Provide your username to reset your password</p>
                    </div>
                  </div>

                  <div className="js-form-message form-group">
                    <label
                      className="input-label text-capitalize"
                    >
                      Username
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="username"
                      tabindex="1"
                      placeholder="Enter Username"
                      aria-label="email@address.com"
                      required
                    />
                  </div>
                  

                  <button
                    type="submit"
                    className="btn btn-lg btn-block bg-primary text-white mt-6"
                  >
                    Send Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
