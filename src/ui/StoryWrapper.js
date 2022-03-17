import styles from "./StoryWrapper.module.css";

function StoryWrapper(props) {
  return <div className={styles.card}>{props.children}</div>;
}

export default StoryWrapper;
