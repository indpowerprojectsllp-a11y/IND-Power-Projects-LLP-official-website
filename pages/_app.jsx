import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'plyr-react/plyr.css';
import 'glightbox/dist/css/glightbox.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap');
    }
  }, []);

  useEffect(() => {
    const initScrollCue = async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    };
    initScrollCue();
  }, [pathname]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IND Power Projects LLP | Renewable Energy & Industrial Consultancy</title>
        <meta name="description" content="IND Power Projects LLP provides renewable energy, electrical infrastructure, DG set support, and strategic property consultancy across Haryana, Punjab, Delhi, and Rajasthan." />
        <link rel="canonical" href="https://www.indpowerprojects.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IND Power Projects LLP" />
        <meta property="og:title" content="IND Power Projects LLP" />
        <meta property="og:description" content="Renewable energy, electrical infrastructure and strategic consultancy services." />
        <meta property="og:url" content="https://www.indpowerprojects.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Layout>
        <ThemeProvider>
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
