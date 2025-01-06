import styles from "../page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LegalNoticeSection from "../components/LegalNoticeSection";

export default function LegalNotice() {
  return (
    <div className={styles.page}>
     <Header/>
     <LegalNoticeSection/>
     <Footer/>
    </div>
  );
};
