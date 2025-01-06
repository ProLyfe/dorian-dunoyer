import styles from "../page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioSection from "../components/PortfolioSection";

export default function InteriorDesign() {
  return (
    <div className={styles.page}>
     <Header/>
     <PortfolioSection/>
     <Footer/>
    </div>
  );
};
