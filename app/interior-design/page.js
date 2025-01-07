import styles from "../page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioSection from "../components/PortfolioSection";
import WatermarkedContent from "../components/WatermarkedContent";

export default function InteriorDesign() {
  return (
    <div className={styles.page}>
      <WatermarkedContent>
        <Header/>
        <PortfolioSection/>
        <Footer/>
      </WatermarkedContent>
    </div>
  );
};
