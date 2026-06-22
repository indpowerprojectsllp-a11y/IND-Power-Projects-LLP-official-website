import { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Swiper styles should be imported in your global CSS (usually in _app.js)
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

/**
 * Carousel Component using Swiper.js
 *
 * @param {Object} props
 * @param {Array<React.ReactNode>} props.children - Array of slides
 * @param {string} props.slideClassName - Custom class for each slide
 * @param {number} props.spaceBetween - Gap between slides (default: 30)
 * @param {number} props.slidesPerView - Number of visible slides (default: 3)
 * @param {boolean} props.pagination - Enable/disable pagination
 * @param {boolean} props.navigation - Enable/disable navigation buttons
 */
const Carousel = ({
  children = [],
  slideClassName = '',
  spaceBetween = 30,
  slidesPerView = 3,
  pagination = true,
  navigation = true,
  ...others
}) => {
  // Swiper custom element refs for external controls
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  return (
    <Fragment>
      {/* Swiper Core */}
      <Swiper
        loop
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={navigation ? { prevEl, nextEl } : false}
        pagination={pagination ? { clickable: true, el: paginationEl } : false}
        {...others}
      >
        {/* Slides */}
        {children.map((slide, i) => (
          <SwiperSlide className={slideClassName} key={i}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Controls (navigation + pagination) */}
      {(navigation || pagination) && (
        <div className="swiper-controls">
          {/* Navigation */}
          {navigation && (
            <div className="swiper-navigation">
              <div
                ref={(node) => setPrevEl(node)}
                className="swiper-button swiper-button-prev"
                role="button"
                aria-label="Previous slide"
              />
              <div
                ref={(node) => setNextEl(node)}
                className="swiper-button swiper-button-next"
                role="button"
                aria-label="Next slide"
              />
            </div>
          )}

          {/* Pagination */}
          {pagination && (
            <div
              ref={(node) => setPaginationEl(node)}
              className="swiper-pagination"
            />
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Carousel;
