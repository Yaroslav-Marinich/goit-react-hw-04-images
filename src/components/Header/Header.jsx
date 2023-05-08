import PropTypes from 'prop-types';

export const Header = ({ children }) => {
  return <header className="Searchbar">{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
