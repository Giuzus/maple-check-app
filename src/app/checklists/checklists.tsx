import React, { FC } from 'react';
import styles from './checklists.module.css';

interface ChecklistsProps {}

const Checklists: FC<ChecklistsProps> = () => (
  <div className={styles.Checklists} data-testid="Checklists">
    Checklists Component
  </div>
);

export default Checklists;
