import React, { FC } from 'react';
import styles from './header.module.css';
import { Outlet, Link } from "react-router-dom";

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Tasks</Link>
        </li>
        <li>
          <Link to={`checklists`}>Checklists</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </div>
);

export default Header;
