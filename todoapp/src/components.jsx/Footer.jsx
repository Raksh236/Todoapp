import styles from "./footer.module.css";
export default function Footer({ compl, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>completed todos:{compl}</span>
      <span className={styles.item}>total todos:{totaltodos}</span>
    </div>
  );
}
