import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './character-tasks.module.css';

interface CharacterTasksProps { }

const CharacterTasks: FC<CharacterTasksProps> = () => {

  //get selected character from state
  const selectedCharacter = useSelector((state: RootState) => state.charactersState.selectedCharacter);

  return (
    <div className={styles.characterTasks} data-testid="CharacterTasks">

      {!selectedCharacter &&
        <h1>Account Wide Tasks</h1>
      }

    </div>
  )
};

export default CharacterTasks;
