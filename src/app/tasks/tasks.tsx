import React, { FC, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import CharacterList from '../character-list/character-list';
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
      <Col sm={2}>
        <CharacterList></CharacterList>
      </Col>
    </div >
  )
};

export default Tasks;
