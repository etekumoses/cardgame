import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { logout } from "../../features/auth/userSlice";

const ProfileDropdown = () => {
  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { user, isError, message } = useSelector((state) => state.auth);

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item topbar-user"
      >
        <DropdownToggle tag="button" type="button" className="btn" caret={true}>
          <a className="js-hs-unfold-invoker navbar-dropdown-account-wrapper">
            <div className="avatar avatar-sm avatar-circle">
              <img
                className="avatar-img"
                src="assets/admin/img/160x160/img1.jpg"
                alt="Image Description"
              />
              <span className="avatar-status avatar-sm-status avatar-status-success"></span>
            </div>
          </a>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end" style={{ margin: 0 }}>
          <DropdownItem>
            <div className="media align-items-center">
              <div className="avatar avatar-sm avatar-circle mr-2">
                <img
                  className="avatar-img"
                  src="assets/admin/img/160x160/img1.jpg"
                  alt="Image Description"
                />
              </div>
              <div className="media-body">
                <span className="card-title h5">Moses</span>
                <span className="card-text">moses@gmail.com</span>
              </div>
            </div>
          </DropdownItem>
          <div className="dropdown-divider"></div>

          {/* <DropdownItem>
            <span className="text-truncate pr-2" title="Settings">
              Settings
            </span>
          </DropdownItem> */}
          {/* <div className="dropdown-divider"></div> */}

          <DropdownItem onClick={() => handleLogOut()}>
            <span className="text-truncate pr-2" title="Sign out">
              Logout
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;
