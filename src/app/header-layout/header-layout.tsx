import React, { FC } from 'react';
import styles from './header-layout.module.css';
import { Outlet, Link } from "react-router-dom";
import Topbar from '../topbar/topbar';

interface HeaderProps { }

const HeaderLayout: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
    <Topbar></Topbar>
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Characters</Link>
        </li>
        <li>
          <Link to={`checklists`}>Checklists</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </div>
);

export default HeaderLayout;
