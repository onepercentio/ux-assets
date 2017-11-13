import PropTypes from 'prop-types';

import {
  BUTTON_ACTION,
  BUTTON_KEY,
} from '../constants';

export default PropTypes.oneOf([BUTTON_ACTION, BUTTON_KEY]);
