import Image from "next/image";
import Logo from "assets/images/logo.png";
import Modal from "~/components/elements/Modal";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles["wrapper"]}>
      <Image src={Logo} alt="logo" />
      {/* <div className={styles["header__share"]}>
        <Modal title="Share" isOpen={false} onClose={() => {}}>
          <div>
            <div className="ShareTitle">Share this with your friends! 🤗</div>
            <div className="ShareLine"></div>
          </div>
        </Modal>
        <Modal title="About" isOpen={false} onClose={() => {}} />
      </div> */}
    </header>
  );
}
