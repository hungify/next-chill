import styles from "../styles/MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles["layout"]}>
      <main>{children}</main>
    </div>
  );
}
