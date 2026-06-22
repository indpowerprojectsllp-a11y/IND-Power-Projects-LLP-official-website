import { useRef } from 'react';
import Image from 'next/image';
import useSticky from 'hooks/useSticky';
import NextLink from 'components/NextLink';
import ListItemLink from 'components/ListItemLink';
import { services, company } from '../data';

const Navbar = ({
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
  navOtherClass = 'navbar-other d-flex d-lg-none',
  fancy = false,
  stickyBox = true,
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);
  const fixedClassName =
    'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  const headerContent = (
    <>
      <div className="navbar-brand brand-lockup">
        <a
          href="/"
          className="d-flex align-items-center gap-3 text-decoration-none"
          aria-label="IND Power Projects LLP home"
        >
          <Image
            src="/img/ind-power-logo.png"
            alt="IND Power Projects LLP logo"
            width={82}
            height={82}
            className="brand-logo"
            priority
          />

          <span className="brand-text">
            <span className="brand-name">IND POWER</span>
            <span className="brand-sub">PROJECTS LLP</span>
          </span>
        </a>
      </div>

      <div
        id="offcanvas-nav"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header d-lg-none offcanvas-bg">
          <a href="/" className="d-flex align-items-center gap-2 text-decoration-none">
            <Image
              src="/img/ind-power-logo.png"
              alt="IND Power Projects LLP logo"
              width={70}
              height={70}
              priority
            />
            <span className="text-white fw-bold">IND POWER PROJECTS LLP</span>
          </a>

          <button
            type="button"
            className="btn-close btn-close-white ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#about" title="About" className="nav-link" />
            </li>

            <li className="nav-item dropdown">
              <a href="#services" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Services
              </a>

              <ul className="dropdown-menu mt-lg-3" data-bs-dismiss="offcanvas">
                {services.map(({ id, url, title }) => (
                  <ListItemLink
                    key={id}
                    href={url}
                    title={title}
                    linkClassName="dropdown-item"
                  />
                ))}
              </ul>
            </li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#property-desk" title="Property Desk" className="nav-link" />
            </li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#why-us" title="Why Us" className="nav-link" />
            </li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#contact" title="Contact" className="nav-link" />
            </li>
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink href={`mailto:${company.email}`} title={company.email} className="link-inverse" />
              <br />
              <NextLink href="#contact" title="Contact Us" />
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-cta d-none d-lg-flex">
        <a href="#contact" className="btn btn-sm btn-primary rounded-pill">
          Request Consultation
        </a>
      </div>

      <div className={navOtherClass}>
        <button
          className="hamburger offcanvas-nav-btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </>
  );

  return (
    <>
      {stickyBox && (
        <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight ?? 0 : 0 }} />
      )}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;