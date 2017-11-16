import PropTypes from 'prop-types';
import { nonNegativeInteger } from 'airbnb-prop-types';

import ButtonTypeShape from '../shapes/ButtonTypeShape';

export default {
  label: PropTypes.string.isRequired,
  size: nonNegativeInteger,
  onClick: PropTypes.func.isRequired,
  iconAfter: PropTypes.node,
  iconBefore: PropTypes.node,
  type: ButtonTypeShape,
  disabled: PropTypes.bool,
  marginHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
};
