import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
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
          Oyun Kuralları
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
          Oyunumuzda normal taş kağıt makas oyunundan farklı olarak bir kural yoktur.<br/>
          Kağıt Taşı - Taş Makası - Makas da Kağıdı yener.
        </p>
        <p>
         Oyunumuzda iki adet oyun modu vardır.<br/>
         Normal oyun modunda herhangi bir skor tutulmaz 1 puan alan kazanır.<br/><br/>
         Skor oyun modunda ise istediğiniz kadar oynayabilirsiniz. Kazandığınız her oyun başına skorunuz
         1 puan artar, kaybettiğinizde ise 1 puan azalır. <br/><br/>
         Dikkat edin eksi puana düşebilirsiniz :)  
        </p>
      </Modal.Body>
      <Modal.Footer>
       
        <button type="button" class="btn btn-dark mt-3" style={{width:150}} onClick={props.onHide}>Kapat</button>
   
      </Modal.Footer>
    </Modal>
  );
}

function RuleModal() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
  
    <button type="button" class="btn btn-outline-light mt-3" style={{width:150}} onClick={() => setModalShow(true)}>Oyuna Kuralları</button>
    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
  </>
  );
}

export default RuleModal;
