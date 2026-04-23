import HeroSection from '../sections/HeroSection';
import PromoDuo from '../sections/PromoDuo';
import FeaturesGPON from '../sections/FeaturesGPON';
import CallToAction from '../sections/CallToAction';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesGPON />
      <PromoDuo />
      <CallToAction />
    </div>
  );
}

export default Home;
