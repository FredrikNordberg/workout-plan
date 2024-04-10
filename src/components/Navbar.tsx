// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import CSS Module

interface NavbarProps {
  days: string[];
}

const Navbar: React.FC<NavbarProps> = ({ days }) => {
  return (
    <nav className={styles.navbar}> 
      <ul className={styles['navbar-list']}>
        {days.map((day, index) => (
          <li key={index} className={styles['navbar-item']}>
            <Link to={`/${day.toLowerCase()}`} className={styles['navbar-link']}>
              {day}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;




