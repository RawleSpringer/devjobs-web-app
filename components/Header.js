import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/assets/desktop/logo.svg" alt="devjobs logo" height="32px" />
      <div className={styles.toggleSwitchWrapper}>
        <img src="/assets/desktop/icon-sun.svg" alt="" />
        <div className={styles.toggleSwitch}>
          <label htmlFor="">
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>
        <img src="/assets/desktop/icon-moon.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
