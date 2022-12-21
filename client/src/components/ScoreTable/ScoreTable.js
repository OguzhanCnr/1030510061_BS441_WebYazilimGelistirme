import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { useGame } from "../../context/gameContext";
import React, { useState,useEffect } from 'react';
function MyVerticallyCenteredModal(props) {
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Skor Tablosu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor:"black"}}>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
         
          <th>Username</th>
          <th>Score</th>
         
        </tr>
      </thead>
      <tbody>
        {props.scoreTable && props.scoreTable.map((data,index)=>(
          <tr>
         
          <td>{data.name}</td>
          <td>{data.score}</td>
          
        </tr>

        ))}
        
        
      </tbody>
    </Table>
      </Modal.Body>
      <Modal.Footer>
       
        <button type="button" class="btn btn-dark mt-3" style={{width:150}} onClick={props.onHide}>Kapat</button>
   
      </Modal.Footer>
    </Modal>
  );
}

function ScoreTable() {
  const [modalShow, setModalShow] = React.useState(false);
  const {GetUser } = useGame();
  const [scoreTable, setscoreTable] = React.useState("");
  
  useEffect(() => {
    GetUser(setscoreTable);
  })
  return (
    <>
    <button type="button"  class="btn btn-outline-light mt-3 ms-4" style={{width:200}} onClick={() => setModalShow(true)}>Skor Tablosu</button>
    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      scoreTable={scoreTable}
    />
  </>
  );
}

export default ScoreTable;
