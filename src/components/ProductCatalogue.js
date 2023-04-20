import React, { useState } from 'react';
import './ProductCat.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ProductCatalogue = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => {
    console.log("entered");
    setShow(false);
    console.log("setshow false");
    setShow2(true);
    console.log("setshow2 true")
  }

  const handleClose2 = () => {
    setShow2(false);
    console.log("handleClose2");
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Send Wishes
      </Button>

      {show ?
        <Modal size='lg' show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleShow2}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> : ""
      }

      {show2 ?
        <Modal centered size='xl bottom' show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Modal Two</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose2}>
              Okay Thanks !
            </Button>
          </Modal.Footer>
        </Modal> : ""
      }
    </>
  );
}

export default ProductCatalogue;
