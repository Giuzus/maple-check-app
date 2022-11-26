import React, { FC } from 'react';
import styles from './characters.module.css';

interface CharacterProps {}

const Characters: FC<CharacterProps> = () => (
  <div className={styles.Character} data-testid="Character">
    Character Component
  </div>
);

export default Characters;
