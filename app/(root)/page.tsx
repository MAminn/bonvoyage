import Achievements from "@/components/Achievements";
import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import Recommendations from "@/components/Recommendations";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <Recommendations />
      <Achievements />
      <Services/>
    </main>
  );
};

export default HomePage;
