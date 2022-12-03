import React, { FC, useState } from 'react';
import { RootState, store } from '../../store/store';
import styles from './character-list.module.css';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Character, setSelectedCharacter } from '../../store/characters/charactersSlice';
import { Col } from 'react-bootstrap';
import CreateCharacterModal from '../create-character-modal/create-character-modal';

interface CharacterListProps { }

const CharacterList: FC<CharacterListProps> = () => {
  let cx = classNames.bind(styles);

  const [show, setShow] = useState(false);
  const handleCloseCharacterCreationModal = () => setShow(false);
  const showCharacterCreationModal = () => setShow(true);

  const characters = useSelector((state: RootState) => state.charactersState.characters);
  const selectedCharacter = useSelector((state: RootState) => state.charactersState.selectedCharacter);


  function onCharacterSelected(character: Character) {
    store.dispatch(setSelectedCharacter(character));
  }

  return (
    <Col sm={2} className={styles.charactersWrapper} data-testid="CharacterList">
      <ul className={styles.characterList}>
        {
          characters?.map((character) => {
            let classNames = cx([styles.characterRow], { [styles.active]: selectedCharacter?.id === character.id });
            return (
              <li className={classNames} key={character.id} onClick={() => onCharacterSelected(character)}>
                <a>{character.name}</a>
              </li>
            )
          })
        }
      </ul>

      <div className={styles.characterRow} onClick={showCharacterCreationModal}>
        <span> + Add character</span>
      </div>
      <CreateCharacterModal show={show} close={handleCloseCharacterCreationModal}></CreateCharacterModal>
    </Col>
  )
};

export default CharacterList;
