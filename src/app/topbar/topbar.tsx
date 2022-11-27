import React, { FC } from 'react';
import styles from './topbar.module.css';
import logo from '../../assets/logo_topbar-32x32.png'
import ServerTime from '../servertime/servertime';

interface TopbarProps { }

const Topbar: FC<TopbarProps> = () => (
  <div className={styles.Topbar} data-testid="Topbar">
    <div className={styles.Topbar__logo}>
      <img src={logo} alt="logoTopBar" />
    </div>
    <div className={styles.Topbar__list}>
      <ul>
        <li>
          <a href="https://maplestory.nexon.net/news" target={'_blank'}>News</a>
        </li>
        <li>
          <a>Server Time:</a> <ServerTime></ServerTime>
        </li>
        <li>
          <a href="https://github.com/Giuzus/maple-check-app" target={'_blank'}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Topbar;
