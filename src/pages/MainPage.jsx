import Hero from "@/components/features/Hero/Hero.jsx";
import MintNft from "@/components/features/MintNFT/MintNFT.jsx";
import Contracts from "@/components/features/Contracts/Contracts.jsx";
import Referrals from "@/components/features/Referrals/Referrals.jsx";
import Faq from "@/components/features/Faq/Faq.jsx";
import PartnersLogos from "@/components/features/PartnersLogos/PartnersLogos.jsx";
const MainPage = () => {
  return (
      <>
        <Hero/>
        <MintNft/>
        <Contracts />
        <Referrals />
        <Faq />
        <PartnersLogos />
      </>
  )     
}

export default MainPage;