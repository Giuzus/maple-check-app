import React, { FC } from 'react';
import styles from './character.module.css';

interface CharacterProps {}

const Character: FC<CharacterProps> = () => (
  <div className={styles.Character} data-testid="Character">
    Character Component
  </div>
);

export default Character;
