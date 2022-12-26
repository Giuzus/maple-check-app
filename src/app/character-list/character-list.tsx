import React, { FC, useState } from 'react';
import { RootState, store } from '../../store/store';
import styles from './character-list.module.css';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Character, setCharacterApiData, setSelectedCharacter } from '../../store/characters/charactersSlice';
import CreateCharacterModal from '../create-character-modal/create-character-modal';
import defaultImage from '../../assets/default-character.png';
import mapleLeaf from '../../assets/maple-leaf.png';
import CharacterService from '../../services/character/character.service';

interface CharacterListProps { }

async function onCharacterSelected(character: Character | null) {
  store.dispatch(setSelectedCharacter(character));

  if (!character) return;
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

  let rowClasses: any = cx([styles.characterRow], { [styles.active]: selectedCharacter === null });

  return (
    <div className={styles.charactersWrapper} data-testid="CharacterList">
      <ul className={styles.characterList}>
        <li className={rowClasses} key="account-wide" onClick={() => onCharacterSelected(null)}>
          <div className={styles.imageWrapper}>
            <img className={classNames(styles.image, styles.accountImage)} src={mapleLeaf} alt="Maple leaf" />
          </div>
          <span>Account wide tasks</span>
        </li>

        {
          characters?.map((character) => {
            rowClasses = cx([styles.characterRow], { [styles.active]: selectedCharacter?.id === character.id });
            const characterImage = character.apiData?.CharacterImageURL ?? defaultImage;

            return (
              <li className={rowClasses} key={character.id} onClick={() => onCharacterSelected(character)}>
                <div className={styles.imageWrapper}>
                  <img className={classNames(styles.characterImage, styles.image)} src={characterImage} alt={`${character.name}`} />
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
    </div>
  )
};

export default CharacterList;
