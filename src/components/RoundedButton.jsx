import React from 'react';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { forbidExtraProps } from 'airbnb-prop-types';

import {
  BUTTON_KEY,
} from '../constants';

import RoundedButtonShape from '../shapes/RoundedButtonShape';

const propTypes = forbidExtraProps({
  ...withStylesPropTypes,
  ...RoundedButtonShape,
});

const defaultProps = {
  onClick() {},
  size: 1,
  type: BUTTON_KEY,
  disabled: false,
  marginHorizontal: 0,
  marginVertical: 0,
};

class RoundedButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    };
  }

  isPressed(status) {
    this.setState({
      pressed: status,
    });
  }

  render() {
    const {
      label,
      size,
      onClick,
      iconAfter,
      iconBefore,
      type,
      disabled,
      marginHorizontal,
      marginVertical,
      styles,
    } = this.props;

    const {
      pressed,
    } = this.state;

    return (
      <div
        {...css(
          styles.RoundedButton,
          {
            height: `${size}rem`,
            width: `${size}rem`,
            borderRadius: `${size * 0.5}rem`,
            margin: `${marginHorizontal}rem ${marginVertical}rem`,
          },
          type === BUTTON_KEY && styles.RoundedButton_type__key,
          pressed && !disabled && styles.RoundedButton_pressed,
          disabled && styles.RoundedButton_disabled,
        )}
        onClick={() => !disabled && onClick()}
        onTouchEnd={() => !disabled && this.isPressed(false)}
        onTouchCancel={() => !disabled && this.isPressed(false)}
        onTouchStart={() => !disabled && this.isPressed(true)}
        role="presentation"
      >
        { iconBefore ? <span {...css(styles.RoundedButton_icon__before, { fontSize: `${size * 0.35}rem` })}>{iconBefore}</span> : null }
        <span {...css(styles.RoundedButton_label, { fontSize: `${size * 0.35}rem` })}>{label}</span>
        { iconAfter ? <span {...css(styles.RoundedButton_icon__after, { fontSize: `${size * 0.35}rem` })}>{iconAfter}</span> : null }
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
    backgroundColor: 'inherit',
    zIndex: zIndex + 1,
    transition: 'background-color 0.5s ease',

    ':hover': {
      backgroundColor: `${color.core.secondary}`,
      textDecoration: 'none',
    },

  },

  RoundedButton_label: {
    color: color.core.white,
    zIndex: zIndex + 2,
  },

  RoundedButton_disabled: {
    opacity: 0.2,
  },

  RoundedButton_type__key: {
    border: `0.05rem solid ${color.core.borderLighter}`,
  },

  RoundedButton_pressed: {
    backgroundColor: `${color.core.secondary}`,
    textDecoration: 'none',
  },

}))(RoundedButton);
