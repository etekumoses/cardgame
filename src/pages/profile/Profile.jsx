import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/layout/Header";
import { useLocalStorage } from "react-use";
import axios from "../../api/Api";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "../../features/profile/profileSlice";

const Profile = () => {
  const [loading, setIsLoading] = useState(true);
  const [Apps, setApps] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { profile, isError, message } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getprofile());
    console.log(profile);
  }, [dispatch]);

  const [greeting, setGreeting] = useState("");

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        backdrop="static"
        centered={true}
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-start">
            <h4 className="h1">Update profile</h4>

            <p>Enter info to update</p>

            <div className=" text-center">
              <button
                type="button"
                id="processEvent"
                className="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="container py-10 py-sm-10">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="card card-lg mb-5">
              <div className="card-body">
                <div className="text-start">
                  <a className="d-flex justify-content-center mb-5">
                    <img
                      className="z-index-2 rounded-lg bg-black"
                      src={profile?.profile === null ? '/assets/frontend/img/logo.png':profile?.profile}
                      
                      alt="Logo"
                    />
                  </a>
                  <div className="mb-5">
                    <h1 className="display-5"> Personal information</h1>
                    <p>This shows your personal details</p>
                  </div>
                </div>
                <hr />
                <div className="js-form-message form-group mb-4">
                  <label className="input-label text-capitalize">
                    Username
                  </label>
                  <div className="mb-1">
                    <h5>{profile?.username}</h5>
                  </div>
                </div>
                <div className="js-form-message form-group mb-4">
                  <label className="input-label">
                    <span className="d-flex justify-content-between align-items-center">
                      Phone
                    </span>
                  </label>
                  <div className="mb-1">
                    <h5>{profile?.contact}</h5>
                  </div>
                </div>
                <div className="js-form-message form-group mb-4">
                  <label className="input-label">
                    <span className="d-flex justify-content-between align-items-center">
                      Age Group
                    </span>
                  </label>
                  <div className="mb-1">
                    <h5>{profile?.age_group}</h5>
                  </div>
                </div>
                <div className="js-form-message form-group mb-4">
                  <label className="input-label">
                    <span className="d-flex justify-content-between align-items-center">
                      Gender
                    </span>
                  </label>
                  <div className="mb-1">
                    <h5>{profile?.gender}</h5>
                  </div>
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg bg-primary"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
