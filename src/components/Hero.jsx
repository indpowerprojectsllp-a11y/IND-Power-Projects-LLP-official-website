import Carousel from 'components/Carousel';

const Hero = () => {
  const slides = [
    {
      backgroundImage: '/img/slider.webp',
      eyebrow: 'IND POWER PROJECTS LLP',
      title: 'Powering Renewable Growth with Reliable Engineering & Strategic Solutions',
      description:
        'A modern renewable-energy and industrial solutions company focused on solar, electrical infrastructure, DG systems, and strategic consultancy.',
      overlayClass: 'bg-overlay-600',
    },
  {
  backgroundImage: '/img/slider-2.webp',
  eyebrow: 'IND POWER PROJECTS LLP',
  title: 'Strategic Auction Property\nAdvisory & Value-Based\nInvestment Support',
  description:
    'We help clients identify, evaluate and navigate auction, DRT, SARFAESI and distressed property opportunities with practical due diligence and grounded advisory support.',
  overlayClass: 'bg-overlay-600',
}
  ];

  return (
    <section className="wrapper hero-wrapper" aria-label="IND Power Projects LLP hero section">
      <div className="swiper-container swiper-hero dots-over">
        <Carousel slidesPerView={1} autoplay={{ delay: 7000, disableOnInteraction: false }}>
          {slides.map(({ backgroundImage, title, description, eyebrow, overlayClass }, index) => (
            <div
              key={index}
              className={`swiper-slide bg-overlay ${overlayClass} bg-dark bg-image hero-slide`}
              style={{ backgroundImage: `url("${backgroundImage}")` }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
            >
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-8 col-xl-7 text-center text-lg-start d-flex flex-column justify-content-center align-self-center">
                    <p className="hero-eyebrow animate__animated animate__fadeInDown animate__delay-1s">{eyebrow}</p>
                    <h1 className="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                      {title}
                    </h1>
                    <p className="lead text-white mb-5 animate__animated animate__fadeInUp animate__delay-2s">
                      {description}
                    </p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start animate__animated animate__fadeInUp animate__delay-2s">
                      <a href="#services" className="btn btn-primary rounded-pill">Explore Services</a>
                      <a href="#contact" className="btn btn-outline-light rounded-pill">Get in Touch</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
