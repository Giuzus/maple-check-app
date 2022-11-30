import React, { FC } from 'react';
import { store } from '../../store/store';
import styles from './character-list.module.css';

interface CharacterListProps { }


const CharacterList: FC<CharacterListProps> = () => {

  const characters = store.getState().charactersState.characters;

  return (
    <div className={styles.CharacterList}>
      {
        characters.map((character) => {
          return (
            <div className={styles.characterRow} key={character.id}>
              <span>{character.name}</span>
            </div>
          )
        })
      }
    </div>
  )
};

export default CharacterList;
