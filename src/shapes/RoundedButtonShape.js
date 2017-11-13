import PropTypes from 'prop-types';
import { nonNegativeInteger } from 'airbnb-prop-types';

import IconPositionShape from '../shapes/IconPositionShape';
import ButtonTypeShape from '../shapes/ButtonTypeShape';

export default {
  label: PropTypes.string.isRequired,
  size: nonNegativeInteger,
  onClick: PropTypes.func.isRequired,
  iconPosition: IconPositionShape,
  icon: PropTypes.node,
  type: ButtonTypeShape,
  isDisabled: PropTypes.bool,
};
