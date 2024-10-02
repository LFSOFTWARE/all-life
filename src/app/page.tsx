import Image from "next/image";
import styles from "./page.module.css";
import HomeContent from "./components/Home";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeContent />
    </main>
  );
}
