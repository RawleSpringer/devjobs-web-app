import styles from '../styles/SearchBar.module.css';

const SearchBar = () => {
  return (
    <aside className={styles.container}>
      <div>
        <p>
          <img src="/assets/desktop/icon-search.svg" alt="" />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise"
            className={styles.search}
          />
        </p>
      </div>
      <div>
        <p>
          <img src="/assets/desktop/icon-location.svg" alt="" />
          <input type="text" placeholder="Filter by location" />
        </p>
      </div>

      <div>
        <p>
          <input type="checkbox" />
          <p>Full Time Only</p>
          <button>Search</button>
        </p>
      </div>
    </aside>
  );
};

export default SearchBar;
