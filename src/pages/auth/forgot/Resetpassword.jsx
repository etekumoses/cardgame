import React from "react";

const Resetpassword = () => {
  const bgstyle = {
    height: "100%",

    backgroundColor: "#377dff",
  };
  const logostyle = {
    height: "150px",
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
                  <div className="text-center">
                    <a
                      className="d-flex justify-content-center mb-5"
                      href="javascript:"
                    >
                      <img
                        className="z-index-2 "
                        src="assets/admin/img/logo.png"
                        alt="Logo"
                        style={logostyle}
                      />
                    </a>
                    <div className="mb-5">
                      <h1 className="display-4"> New password!</h1>
                      <p>Please fill out the details below to set new password</p>
                    </div>
                  </div>

                  <div className="js-form-message form-group">
                    <label
                      className="input-label"
                      for="signupSrPassword"
                      tabindex="0"
                    >
                      <span className="d-flex justify-content-between align-items-center">
                        New Password
                      </span>
                    </label>

                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className="js-toggle-password form-control form-control-lg"
                        name="password"
                        id="signupSrPassword"
                        placeholder="Enter new password"
                        aria-label="8+ characters required"
                        required
                      />
                      <div id="changePassTarget" className="input-group-append">
                        <a className="input-group-text" href="javascript:">
                          <i
                            id="changePassIcon"
                            className="tio-visible-outlined"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="js-form-message form-group">
                    <label
                      className="input-label"
                      for="signupSrPassword"
                      tabindex="0"
                    >
                      <span className="d-flex justify-content-between align-items-center">
                        Confirm Password
                      </span>
                    </label>

                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className="js-toggle-password form-control form-control-lg"
                        name="confirmpassword"
                        id="signupSrPassword"
                        placeholder="Confirm new password"
                        aria-label="8+ characters required"
                        required
                      />
                      <div id="changePassTarget" className="input-group-append">
                        <a className="input-group-text" href="javascript:">
                          <i
                            id="changePassIcon"
                            className="tio-visible-outlined"
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-lg btn-block bg-primary text-white"
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

export default Resetpassword;
