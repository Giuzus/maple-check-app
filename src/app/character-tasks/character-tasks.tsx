import React, { FC } from 'react';
import styles from './character-tasks.module.css';

interface CharacterTasksProps { }

const CharacterTasks: FC<CharacterTasksProps> = () => (
  <div className={styles.characterTasks} data-testid="CharacterTasks">
    <h1>CharacterTasks Component</h1>
    <img alt='obunga' src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F383%2F477%2F44b.jpg'></img>
  </div>
);

export default CharacterTasks;
