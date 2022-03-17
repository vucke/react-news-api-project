import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./StoriesPage.module.css";

function StoriesPage() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}>
        <div className={styles.box}>
          <Link className={styles.link} to="/top">
            Top Stories
          </Link>
        </div>

        <div className={styles.box}>
          <Link className={styles.link} to="/best">
            Best Stories
          </Link>
        </div>

        <div className={styles.box}>
          <Link className={styles.link} to="/new">
            New Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StoriesPage;
