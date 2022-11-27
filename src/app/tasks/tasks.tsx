import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import { store } from '../../store/store';
import CreateCharacterModal from '../create-character-modal/create-character-modal';
import styles from './tasks.module.css';

interface TasksProps { }

const Tasks: FC<TasksProps> = () => {

  const [show, setShow] = useState(false);
  const handleCloseCharacterCreationModal = () => setShow(false);
  const showCharacterCreationModal = () => setShow(true);

  return (
    <div className={styles.Tasks} data-testid="Tasks">
      <Button onClick={showCharacterCreationModal}> Add character </Button>
      <CreateCharacterModal show={show} close={handleCloseCharacterCreationModal}></CreateCharacterModal>
      <ul>
        {
          //temporary code to show characters
          store.getState().characters.characters.map((character) => <li key={character.id}>{character.name}</li>)
        }
      </ul>
    </div >
  )
};

export default Tasks;
