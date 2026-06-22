import { Fragment } from 'react';
import Hero from 'components/Hero';
import PageProgress from 'components/PageProgress';
import Tiles from 'components/Tiles';
import Facts from 'components/Facts';

import Settings from '../src/icons/Settings';
import Check from '../src/icons/Check';
import User from '../src/icons/User';
import BriefcaseTwo from '../src/icons/BriefcaseTwo';
import AwardTwo from '../src/icons/AwardTwo';

import { company, serviceCards, valueCards } from '../src/data';

const iconMap = [Check, User, BriefcaseTwo, AwardTwo];

const Home = () => {
  const values = valueCards.map((item, index) => ({
    ...item,
    Icon: iconMap[index] || Check
  }));

  return (
    <Fragment>
      <PageProgress />

      <main className="content-wrapper overflow-x-hidden">
        <Hero />

        {/* ABOUT */}
        <section
          id="about"
          className="wrapper bg-light angled lower-end"
          aria-labelledby="about-heading"
        >
          <div className="container py-12 py-md-13">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-6">
                <Settings
                  className="icon-svg-md mb-4 text-primary"
                  aria-hidden="true"
                  focusable="false"
                />

                <p className="section-kicker">ABOUT IND POWER PROJECTS LLP</p>

                <h1 id="about-heading" className="display-4 mb-3">
                  A serious emerging company for renewable energy, electrical infrastructure and strategic consultancy.
                </h1>

                <p>
                  IND Power Projects LLP is a growing solutions-focused company working at the intersection of renewable energy, electrical infrastructure, DG power support, and strategic consultancy.
                </p>

                <p>
                  We are building our company with a clear focus on quality, practical execution, honest advisory, and long-term trust. Our services are currently focused across Haryana, Punjab, Delhi, and Rajasthan.
                </p>

                <p className="mb-0">
                  We do not believe in inflated claims. Our approach is simple: understand the requirement properly, review risk carefully, and support clients with dependable, value-oriented guidance.
                </p>
              </div>

              <div className="col-lg-6 position-relative order-lg-2">
                <Tiles />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="wrapper services-section">
          <div className="container py-12 py-md-14">
            <div className="row text-center mb-8">
              <div className="col-lg-9 mx-auto">
                <p className="section-kicker">OUR CAPABILITIES</p>
                <h2 className="display-5 mb-3">
                  Renewable-energy aligned industrial and advisory services
                </h2>
                <p className="lead mb-0">
                  A focused service mix for solar, electrical infrastructure, DG support, utility execution, and strategic property consultancy.
                </p>
              </div>
            </div>

            <div className="row gy-5">
              {serviceCards.map(({ id, title, text, icon }) => (
                <div className="col-md-6 col-lg-4 d-flex" key={id}>
                  <div className="service-card w-100">
                    <div className="service-icon">
                      <i className={`${icon} fs-34`} />
                    </div>
                    <h3 className="h4 mb-3">{title}</h3>
                    <p className="mb-0">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROPERTY DESK */}
        <section id="property-desk" className="wrapper property-section">
          <div className="container py-12 py-md-13">
            <div className="row align-items-center gy-6">
              <div className="col-lg-7">
                <p className="section-kicker">STRATEGIC PROPERTY DESK</p>
                <h2 className="display-5 mb-3">
                  Consultancy for carefully evaluated property opportunities
                </h2>
                <p>
                  We provide consultancy services for selected auction, distressed, and legal property opportunities with focus on due diligence, risk review, and informed decision-making.
                </p>
                <p className="mb-0">
                  Our advisory focus currently covers Haryana, Punjab, Delhi, and Rajasthan. We avoid guaranteed-return language and keep every opportunity grounded in practical review and market understanding.
                </p>
              </div>

              <div className="col-lg-5">
                <div className="property-panel">
                  <h3 className="mb-3">Advisory Areas</h3>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <i className="uil uil-check-circle" /> Bank auction properties
                    </li>
                    <li>
                      <i className="uil uil-check-circle" /> DRT / SARFAESI matters
                    </li>
                    <li>
                      <i className="uil uil-check-circle" /> NCLT / court-related property review
                    </li>
                    <li>
                      <i className="uil uil-check-circle" /> Risk and value assessment support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="wrapper bg-soft-primary">
          <div className="container py-12 py-md-14">
            <div className="row text-center mb-8">
              <div className="col-lg-8 mx-auto">
                <p className="section-kicker">WHY WORK WITH US</p>
                <h2 className="display-5 mb-0">
                  Premium presentation with honest, grounded execution values
                </h2>
              </div>
            </div>

            <Facts arr={values} />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="wrapper contact-section">
          <div className="container py-12 py-md-14">
            <div className="row gy-8 align-items-center">
              <div className="col-lg-6">
                <p className="section-kicker">CONTACT US</p>
                <h2 className="display-5 mb-3">
                  Let’s discuss your renewable energy, electrical or consultancy requirement.
                </h2>
                <p className="lead mb-4">{company.address}</p>
                <p className="mb-2">
                  <strong>Phone:</strong> {company.phonePrimary} / {company.phoneSecondary}
                </p>
                <p className="mb-0">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
              </div>

              <div className="col-lg-6">
                <div className="map-card">
                  <iframe
                    title="IND Power Projects LLP Office Location"
                    src={`https://maps.google.com/maps?q=${company.coordinates}&z=16&output=embed`}
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;
