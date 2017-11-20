import PropTypes from 'prop-types';

import {
  BUTTON_CONFIRM,
  BUTTON_KEY,
  BUTTON_CANCEL,
} from '../constants';

export default PropTypes.oneOf([BUTTON_CONFIRM, BUTTON_KEY, BUTTON_CANCEL]);
