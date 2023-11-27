import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 function Example({handleDelete,id}) {
  // mình có thể thay vì dùng cái handleDelete,id thì mình dùng props rồi props. là ra được 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submit =()=>{
    handleDelete(id);
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;