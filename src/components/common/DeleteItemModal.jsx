import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deletegrant } from "../../features/grants/grantSlice";

function DeleteItemModal({ close, show, title ,id,action}) {
  // set up dispatch
  const dispatch = useDispatch();

useEffect(() => {
 console.log(id);
 console.log(title);
}, []);
  return (
    <>
      <Modal show={show} onHide={close} backdrop="static" keyboard={false}>
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
            
          <Button variant="info" onClick={close}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>{
            dispatch(action);
            close();
          }}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteItemModal;
