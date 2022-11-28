import React, { FC } from 'react';
import styles from './topbar.module.css';
import logo from '../../assets/logo_topbar-32x32.png'
import ServerTime from '../server-time/server-time';

interface TopbarProps { }

const Topbar: FC<TopbarProps> = () => (
  <div className={styles.Topbar} data-testid="Topbar">
    <div className={styles.Topbar__logo}>
      <img src={logo} alt="logoTopBar" />
    </div>
    <div className={styles.Topbar__list}>
      <ul>
        <li>
          <a href="https://maplestory.nexon.net/news" target={'_blank'} rel="noreferrer" data-testid='news'>News</a> 
        </li>
        <li>
          <span>Server Time:</span> <ServerTime></ServerTime>
        </li>
        <li>
          <a href="https://github.com/Giuzus/maple-check-app" target={'_blank'} rel="noreferrer" data-testid='contact'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Topbar; 
