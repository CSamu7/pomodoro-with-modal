import styles from "./Header.module.css";

export default function Header(props) {
  const { title } = props;

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
}
