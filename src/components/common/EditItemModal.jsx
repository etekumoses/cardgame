import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updatecategory } from "../../features/categories/categorySlice";
import { deletegrant } from "../../features/grants/grantSlice";

function EditItemModal({ close, show, title, id, }) {
  // set up dispatch
  const dispatch = useDispatch();

  const nameRef = useRef();
  const { message} = useSelector(
    (state) => state.categories
  );
  const [name, setName] = useState(title);
  const handleSubmit = (e) => {
    e.preventDefault();
    const catdata = {
      id:id,
      name:name,
    };
    console.log(catdata);
    dispatch(updatecategory(catdata));
    toast.success(message.message);
  close();
  };

  useEffect(() => {
    console.log(title);
  }, [])
  
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
          <form
            action="javascript:"
            enctype="multipart/form-data"
         
          >
            <div className=" p-4 mb-3" id="">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label
                      className="input-label"
                      for="exampleFormControlInput1"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter category title"
                      required
                      id="name"
                      ref={nameRef}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-dark-purple" onClick={close}>
            Cancel
          </Button>
          <Button
            className="bg-primary"
            onClick={
            handleSubmit
            }
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditItemModal;
