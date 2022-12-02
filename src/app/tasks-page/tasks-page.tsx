import React, { FC } from 'react';
import CharacterList from '../character-list/character-list';
import styles from './tasks-page.module.css';

interface TasksPageProps { }

const TasksPage: FC<TasksPageProps> = () => {

  return (
    <div className={styles.tasksPage} data-testid="tasksPage">
      <CharacterList></CharacterList>
    </div >
  )
};

export default TasksPage;
