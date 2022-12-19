import React, { FC, useState } from 'react';
import { RootState, store } from '../../store/store';
import styles from './character-list.module.css';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Character, setCharacterApiData, setSelectedCharacter } from '../../store/characters/charactersSlice';
import { Col } from 'react-bootstrap';
import CreateCharacterModal from '../create-character-modal/create-character-modal';
import defaultImage from '../../assets/default-character.png';
import CharacterService from '../../services/character.service';

interface CharacterListProps { }

async function onCharacterSelected(character: Character) {
  store.dispatch(setSelectedCharacter(character));

  const apiData = await CharacterService.fetchCharacterInfo(character.name);
  if (apiData) {
    store.dispatch(setCharacterApiData({ id: character.id!!, data: apiData }));
  }
}

const CharacterList: FC<CharacterListProps> = () => {
  let cx = classNames.bind(styles);
  const [show, setShow] = useState(false);
  const handleCloseCharacterCreationModal = () => setShow(false);
  const showCharacterCreationModal = () => setShow(true);

  let characters = useSelector((state: RootState) => state.charactersState.characters);
  const selectedCharacter = useSelector((state: RootState) => state.charactersState.selectedCharacter);

  return (
    <Col sm={2} className={styles.charactersWrapper} data-testid="CharacterList">
      <ul className={styles.characterList}>
        {
          characters?.map((character) => {
            const classNames = cx([styles.characterRow], { [styles.active]: selectedCharacter?.id === character.id });
            const characterImage = character.apiData?.CharacterImageURL ?? defaultImage;

            return (
              <li className={classNames} key={character.id} onClick={() => onCharacterSelected(character)}>
                <div className={styles.imageWrapper}>
                  <img className={styles.characterImage} src={characterImage} alt={`${character.name}`} />
                </div>
                <span>{character.name}</span>
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
