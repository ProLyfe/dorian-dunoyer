import Image from "next/image";
// import './styles/variables.module.scss'; 
import styles from "./page.module.css";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import KoreanTextSection from "./components/KoreanTextSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";
import WatermarkedContent from "./components/WatermarkedContent";

export default function Home() {
  return (
    <div className={styles.page}>
      <WatermarkedContent>
        <Header/>
        <FirstSection/>
        <KoreanTextSection/>
        <SecondSection/>
        <ThirdSection/>
        <Footer/>
      </WatermarkedContent>
    </div>
  );
}
