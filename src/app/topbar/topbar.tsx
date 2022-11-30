import React, { FC } from 'react';
import styles from './topbar.module.css';
import logo from '../../assets/logo_topbar-32x32.png'
import ServerTime from '../server-time/server-time';

interface TopbarProps { }

const Topbar: FC<TopbarProps> = () => (
  <div className={styles.Topbar} data-testid="Topbar">
    <span className={styles.Topbar__name}>MAPLECHECK</span>
    <div className={styles.Topbar__logo}>
      <img src={logo} alt="logoTopBar" />
    </div>
    <ServerTime></ServerTime>
    <span className={styles.Topbar__clock}>SERVER TIME</span>
  </div>
);

export default Topbar; 
