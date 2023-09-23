import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deletegrant } from "../../features/grants/grantSlice";

function DeleteModal({ setIsModalOpen, isModalOpen, title, id, handleDelete }) {
  return (
    <>
      <Modal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        backdrop="static"
        keyboard={false}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="text-center">
              <h2> Delete Confirmation</h2>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p>Are you sure you want to delete</p>
            <h4>{title}</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete(id);
              setIsModalOpen(false);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
