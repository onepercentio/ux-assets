import PropTypes from 'prop-types';
import ButtonTypeShape from '../shapes/ButtonTypeShape';

export default {
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  iconAfter: PropTypes.node,
  iconBefore: PropTypes.node,
  type: ButtonTypeShape,
  disabled: PropTypes.bool,
  marginHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
};
