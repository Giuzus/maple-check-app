import React, { FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { addCharacter } from '../../store/characters/charactersSlice';
import { store } from '../../store/store';
import styles from './create-character-modal.module.css';

interface CreateCharacterModalProps {
  show: boolean;
  close(): void;
}

const CreateCharacterModal: FC<CreateCharacterModalProps> = ({ show, close }) => {

  let [name, setName] = useState("")

  function saveCharacter(event: any) {
    event.preventDefault();

    store.dispatch(addCharacter({ name: name }));
    closeModal();
  }

  function validateName(): boolean {
    return name.length > 0;
  }

  function closeModal() {
    close();
    setName("");
  }

  return (
    <div className={styles.CreateCharacterModal} data-testid="CreateCharacterModal">

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create character</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={saveCharacter}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Character name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="nameInput"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={saveCharacter}
            disabled={!validateName()}
            data-testid="saveButton">
            Save
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
};

export default CreateCharacterModal;
