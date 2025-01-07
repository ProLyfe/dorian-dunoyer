import styles from "../page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LegalNoticeSection from "../components/LegalNoticeSection";
import WatermarkedContent from "../components/WatermarkedContent";

export default function LegalNotice() {
  return (
    <div className={styles.page}>
      <WatermarkedContent>
        <Header/>
        <LegalNoticeSection/>
        <Footer/>
      </WatermarkedContent>
    </div>
  );
};
