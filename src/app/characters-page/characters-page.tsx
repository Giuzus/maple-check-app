import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CharacterList from '../character-list/character-list';
import CharacterTasks from '../character-tasks/character-tasks';
import styles from './characters-page.module.css';

interface CharactersPageProps { }

const CharactersPage: FC<CharactersPageProps> = () => {

  return (
    <div className={styles.charactersPage}>
      <div className={styles.leftMenu}>
        <CharacterList></CharacterList>
      </div>
      <div className={styles.content}>
        <CharacterTasks></CharacterTasks>
      </div>
    </div>
  )
};

export default CharactersPage;
