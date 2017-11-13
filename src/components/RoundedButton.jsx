import React from 'react';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { forbidExtraProps } from 'airbnb-prop-types';

import {
  BUTTON_KEY,
  ICON_AFTER_POSITION,
} from '../constants';

import RoundedButtonShape from '../shapes/RoundedButtonShape';

const propTypes = forbidExtraProps({
  ...withStylesPropTypes,
  RoundedButtonShape,
});

const defaultProps = {
  onClick() {},
  size: 1,
  type: BUTTON_KEY,
  iconPosition: ICON_AFTER_POSITION,
};

class RoundedButton extends React.Component {
  constructor(props) {
    super(props);
    console.log('teste');
  }

  render() {
    const {
      label,
      size,
      onClick,
      iconPosition,
      icon,
      type,
      styles,
    } = this.props;

    return (
      <div
        {...css(
          styles.RoundedButton,
          {
            height: `${size}rem`,
            width: `${size}rem`,
            borderRadius: `${size * 0.5}rem`,
          },
          type === BUTTON_KEY && styles.RoundedButton_type__key,
        )}
        onClick={onClick}
        onTouchEnd={onClick}
        role="presentation"
        >
        <span {...css(
          styles.RoundedButton_label,
          {
            fontSize: `${size * 0.4}rem`,
          },
      )}>{label}
        </span>
      </div>
    );
  }
}

RoundedButton.propTypes = propTypes;
RoundedButton.defaultProps = defaultProps;

export default withStyles(({ aeroPay: { color, zIndex } }) => ({
  RoundedButton: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.core.secondary,
    zIndex: zIndex + 1,

    ':hover': {
      backgroundColor: `darken(${color.core.grayLighter}, 10%)`,
      textDecoration: 'none',
    },

  },

  RoundedButton_label: {
    color: color.core.white,
    zIndex: zIndex + 2,
  },

  RoundedButton_type__key: {
    border: `0.05rem solid ${color.core.borderLighter}`,
  },

  SingleDatePicker_closeButton: {
    background: 'none',
    border: 0,
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'normal',
    overflow: 'visible',
    cursor: 'pointer',

    position: 'absolute',
    top: 0,
    right: 0,
    padding: 15,
    zIndex: zIndex + 2,

    ':hover': {
      color: `darken(${color.core.grayLighter}, 10%)`,
      textDecoration: 'none',
    },

    ':focus': {
      color: `darken(${color.core.grayLighter}, 10%)`,
      textDecoration: 'none',
    },
  },

  SingleDatePicker_closeButton_svg: {
    height: 15,
    width: 15,
    fill: color.core.grayLighter,
  },
}))(RoundedButton);
