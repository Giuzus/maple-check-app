import React, { FC } from 'react';
import CharacterList from '../character-list/character-list';
import styles from './characters-page.module.css';

interface CharactersPageProps { }

const CharactersPage: FC<CharactersPageProps> = () => {

  return (
    <div className={styles.charactersPage} data-testid="charactersPage">
      <CharacterList></CharacterList>
    </div >
  )
};

export default CharactersPage;
