import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const RouteGuard = ({ roleRequired, children }) => {
  const { isAuthenticated, role } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/" />;
  }

  return children;
};
RouteGuard.propTypes = {
  roleRequired: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default RouteGuard;