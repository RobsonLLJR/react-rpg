import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const CRUD = () => {
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
      id: 2,
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
    setData(empdata);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
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
          </tr>
        </thead>
        <tbody>
          
          {data && data.length > 0 ? data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index+ 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.hitPoints}</td>
                <td>{item.strength}</td>
                <td>{item.defense}</td>
                <td>{item.intelligence}</td>
                <td>{item.class}</td>
              </tr>
            );
          }) : 'Carregando...'}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default CRUD;
