import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button className="Button" type="submit" onClick={onClick}>
      <span>Load More</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
