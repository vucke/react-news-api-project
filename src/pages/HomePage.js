import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.boxone}>
          <Link className={styles.link} to="/stories">
            If you are interested in reading our most fun stories,choose this
            side
          </Link>
        </div>

        <div className={styles.boxtwo}>
          <Link className={styles.link} to="">
            If you are interested in spending some playful time choose this side
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
