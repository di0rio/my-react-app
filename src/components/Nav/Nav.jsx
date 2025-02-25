import styles from './Nav.module.css'

import logo from "../../img/Logo.png"

const Nav = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Logo}>
        <img className={styles.LogoBe} src={logo} alt="" />
      </div>
      {/* <div className={styles.NavContent}>
        <div className={styles.SectionTitle}>Funcionários</div>
        <div className={styles.SearchContainer}>
          <input 
            type="text"
            className="search-input"
            placeholder="Pesquisar"
          />
          <span className={styles.SearchIcon}>🔍</span>
        </div>
      </div> */}
    </div>
  )
}

export default Nav