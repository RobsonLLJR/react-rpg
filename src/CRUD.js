import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const empdata = [
    {
      id: 1,
      name: "Manoj",
      hitPoints: 29,
      strength: 1,
      defense: 1,
      intelligence: 10,
      class: 1,
    },
    {
      id: 2,
      name: "Robson",
      hitPoints: 29,
      strength: 1,
      defense: 1,
      intelligence: 10,
      class: 1,
    },
    {
      id: 3,
      name: "Eduarda",
      hitPoints: 29,
      strength: 1,
      defense: 1,
      intelligence: 10,
      class: 1,
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://localhost:44322/api/Character/GetAll")
      .then((result) => {
        setData(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    //alert(id);
    handleShow();
  };
  const handleDelete = (id) => {
    if (window.confirm("Do you really want to delete this item?")) {
      alert(id);
    }
  };

  const handleSave = () => {
    const url = "https://localhost:44322/api/Character";
    const data = {
      name: name,
      hitPoints: hitPoints,
      strength: strenght,
      defense: defense,
      intelligence: intelligence,
      class: classe,
    };

    axios.post(url, data).then((result) => {
      if (result.data.success == true) {
        getData();
        clear();
        toast.success(result.data.message);
      } else {
        toast.error(result.data.message);
      }
    });
  };

  const clear = () => {
    setName("");
    setHitPoints("");
    setStrenght("");
    setDefense("");
    setIntelligence("");
    setClasse("");
  };

  const [name, setName] = useState("");
  const [hitPoints, setHitPoints] = useState("");
  const [strenght, setStrenght] = useState("");
  const [defense, setDefense] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [classe, setClasse] = useState("");

  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [editHitPoints, setEditHitPoints] = useState("");
  const [editStrenght, setEditStrenght] = useState("");
  const [editDefense, setEditDefense] = useState("");
  const [editIntelligence, setEditIntelligence] = useState("");
  const [editClasse, setEditClasse] = useState("");
  const handleUpdate = () => {};

  return (
    <Fragment>
      <ToastContainer />
      <Container className="m-2">
        <Row>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="HitPoints"
              value={hitPoints}
              onChange={(e) => setHitPoints(e.target.value)}
            ></input>
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Strength"
              value={strenght}
              onChange={(e) => setStrenght(e.target.value)}
            ></input>
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Defense"
              value={defense}
              onChange={(e) => setDefense(e.target.value)}
            ></input>
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Intelligence"
              value={intelligence}
              onChange={(e) => setIntelligence(e.target.value)}
            ></input>
          </Col>
          <Col>
            <Form.Select
              value={classe}
              onChange={(e) => setClasse(e.target.value)}
            >
              <option>Open this select menu</option>
              <option value="1">Knight</option>
              <option value="2">Mage</option>
              <option value="3">Cleric</option>
            </Form.Select>
          </Col>
          <Col>
            <button className="btn btn-primary" onClick={() => handleSave()}>
              Submit
            </button>
          </Col>
        </Row>
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Hit Points</th>
            <th>Strength</th>
            <th>Defense</th>
            <th>Intelligence</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.hitPoints}</td>
                    <td>{item.strength}</td>
                    <td>{item.defense}</td>
                    <td>{item.intelligence}</td>
                    <td>{item.class}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Carregando..."}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Character</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="m-2">
            <Row>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                ></input>
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="HitPoints"
                  value={editHitPoints}
                  onChange={(e) => setEditHitPoints(e.target.value)}
                ></input>
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Strength"
                  value={editStrenght}
                  onChange={(e) => setEditStrenght(e.target.value)}
                ></input>
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Defense"
                  value={editDefense}
                  onChange={(e) => setEditDefense(e.target.value)}
                ></input>
              </Col>
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Intelligence"
                  value={editIntelligence}
                  onChange={(e) => setEditIntelligence(e.target.value)}
                ></input>
              </Col>
              <Col>
                <Form.Select
                  value={editClasse}
                  onChange={(e) => setEditClasse(e.target.value)}
                >
                  <option>Open this select menu</option>
                  <option value="1">Knight</option>
                  <option value="2">Mage</option>
                  <option value="3">Cleric</option>
                </Form.Select>
              </Col>
              <Col>
                <button className="btn btn-primary">Submit</button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CRUD;
