import styles from "./StoriesContainerWrapper.module.css";

function StoriesContainerWrapper(props) {
  return <div className={styles.card}>{props.children}</div>;
}

export default StoriesContainerWrapper;
