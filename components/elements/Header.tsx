import Image from "next/image";
import Logo from "assets/images/logo.png";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles["wrapper"]}>
      <Image src={Logo} alt="logo" />
    </header>
  );
}
