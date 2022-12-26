import React, { FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import CharacterService from '../../services/character/character.service';
import { addCharacter } from '../../store/characters/charactersSlice';
import { store } from '../../store/store';
import styles from './create-character-modal.module.css';

interface CreateCharacterModalProps {
  show: boolean;
  close(): void;
}

const CreateCharacterModal: FC<CreateCharacterModalProps> = ({ show, close }) => {

  let [name, setName] = useState("")
  let [saving, setSaving] = useState(false)

  async function saveCharacter(event: any) {
    event.preventDefault();

    if (saving) return;

    setSaving(true);

    const apiData = await CharacterService.fetchCharacterInfo(name);

    store.dispatch(addCharacter({ name: name, apiData: apiData }));

    closeModal();
    setSaving(false);
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
            disabled={!validateName() || saving}
            data-testid="saveButton">

            {(!saving) ?
              <> Save</>
              :
              <>Saving...</>
            }
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
};

export default CreateCharacterModal;
