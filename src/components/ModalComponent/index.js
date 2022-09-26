import { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

function ModalComponent(props) {
  const [modal, setModal] = useState(props.isOpen);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>{props.body}</ModalBody>
      </Modal>
    </div>
  );
}

export default ModalComponent;
