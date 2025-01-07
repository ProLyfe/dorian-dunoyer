import styles from "../page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioSectionJewelery from "../components/PortfolioSectionJewelry";
import FullscreenModal from "../components/FullscreenModal";
import WatermarkedContent from "../components/WatermarkedContent";

export default function Jewelry() {
  return (
    <div className={styles.page}>
      <WatermarkedContent>
        <FullscreenModal/>
        <Header/>
        <PortfolioSectionJewelery/>
        <Footer/>
      </WatermarkedContent>
    </div>
  );
};
