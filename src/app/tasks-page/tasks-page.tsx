import React, { FC, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import CharacterList from '../character-list/character-list';
import CreateCharacterModal from '../create-character-modal/create-character-modal';
import styles from './tasks-page.module.css';

interface TasksPageProps { }

const TasksPage: FC<TasksPageProps> = () => {

  const [show, setShow] = useState(false);
  const handleCloseCharacterCreationModal = () => setShow(false);
  const showCharacterCreationModal = () => setShow(true);

  return (
    <div className={styles.tasksPage} data-testid="tasksPage">
      <Button onClick={showCharacterCreationModal}> Add character </Button>
      <CreateCharacterModal show={show} close={handleCloseCharacterCreationModal}></CreateCharacterModal>
      <CharacterList></CharacterList>
    </div >
  )
};

export default TasksPage;
