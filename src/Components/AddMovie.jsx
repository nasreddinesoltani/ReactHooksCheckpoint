import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Rating from "@mui/material/Rating";

const AddMovie = ({ moviesHandler }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
  });
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const AddingMovie = (e) => {
    e.preventDefault();
    moviesHandler(newMovie);
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Enter movie title"
                name="title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Enter movie description"
                name="description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>MoviePoster </Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                placeholder="Enter poster url"
                name="posterURL"
              />
            </Form.Group>

            <Rating
              name="simple-controlled"
              max={10}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddingMovie} type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
