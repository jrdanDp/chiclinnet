import Header1 from '../components/static/Header1';
import Header2 from '../components/static/Header2';

function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden hero-carousel">
      <div className="hero-slide">
        <Header1 />
      </div>
      <div className="hero-slide">
        <Header2 />
      </div>
    </section>
  );
}

export default HeroSection;
