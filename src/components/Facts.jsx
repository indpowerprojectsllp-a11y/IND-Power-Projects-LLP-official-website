import PropTypes from 'prop-types';

const Facts = ({ arr }) => {
  return (
    <section className="row gy-5 gx-lg-5" aria-labelledby="facts-heading" role="region">
      <div className="col-12 mx-auto">
        <div className="row align-items-stretch counter-wrapper gy-4" id="facts-heading">
          {arr.map(({ title, text, Icon, id }) => (
            <div key={id} className="col-md-6 col-lg-3 d-flex">
              <div className="value-card w-100 text-center">
                <Icon className="icon-svg-md text-primary mb-3" role="img" aria-hidden="true" />
                <h3 className="h4 mb-2">{title}</h3>
                <p className="mb-0">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Facts.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      Icon: PropTypes.elementType.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default Facts;
