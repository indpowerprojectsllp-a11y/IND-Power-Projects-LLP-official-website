import Image from 'next/image';
import NextLink from 'components/NextLink';
import { usefulLinks, company } from '../data';

const renderWidget = (list, title) => (
  <div className="widget">
    <h3 className="widget-title fs-24 mb-3">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ url, title, id }) => (
        <li key={`${title}-${id}`}>
          <NextLink href={url} title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border-top secondary-bg overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-4">
        <div className="row gx-10 gy-8 justify-content-between">

          {/* Brand / About */}
          <div className="col-lg-5">
            <div className="widget footer-brand">
              <a href="/" className="footer-brand-lockup text-decoration-none mb-4">
                <Image
                  src="/img/ind-power-logo.png"
                  alt="IND Power Projects LLP logo"
                  width={72}
                  height={72}
                  className="footer-logo"
                  priority
                />

                <span className="footer-brand-text">
                  <span className="footer-brand-name">IND POWER</span>
                  <span className="footer-brand-sub">PROJECTS LLP</span>
                </span>
              </a>

              <p className="footer-brand-desc text-white fs-18 mb-0">
                Renewable-energy aligned industrial solutions, electrical infrastructure support,
                and strategic consultancy with a grounded, honest approach.
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-sm-6 col-lg-3 text-white">
            {renderWidget(usefulLinks, 'Useful Links')}
          </div>

          {/* Contact */}
          <div className="col-sm-6 col-lg-4 text-white">
            <div className="widget">
              <h3 className="widget-title fs-24 mb-3">Contact Us</h3>

              <div className="d-flex align-items-start mb-3">
                <i className="uil uil-location-pin-alt fs-30 footer-icon" aria-hidden="true" />
                <address className="ms-2 m-0 mt-1 text-white">{company.address}</address>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="uil uil-envelope fs-26 footer-icon" aria-hidden="true" />
                <a
                  href={`mailto:${company.email}`}
                  className="link-body ms-2 text-white"
                  aria-label="Email IND Power Projects LLP"
                >
                  {company.email}
                </a>
              </div>

              <div className="d-flex align-items-start mb-3">
                <i className="uil uil-phone-volume fs-26 footer-icon" aria-hidden="true" />
                <div className="ms-2">
                  <a href="tel:+919813836005" className="fs-18 text-white d-block">
                    {company.phonePrimary}
                  </a>
                  <a href="tel:+919996602221" className="fs-18 text-white d-block">
                    {company.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="uil uil-globe fs-26 footer-icon" aria-hidden="true" />
                <span className="ms-2 text-white">{company.website}</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-6 mb-4 footer-divider" />

        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-0 text-white text-center">
            © {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;