import React from 'react';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { forbidExtraProps } from 'airbnb-prop-types';

import InputDotShape from '../shapes/InputDotShape';

const propTypes = forbidExtraProps({
  ...withStylesPropTypes,
  ...InputDotShape,
});

const defaultProps = {
  size: 1,
  filled: false,
  marginHorizontal: 0,
  marginVertical: 0,
};

function InputDot({
  size,
  filled,
  marginHorizontal,
  marginVertical,
  styles,
}) {
  return (
    <div
      {...css(
        styles.InputDot,
        {
          height: `${size}rem`,
          width: `${size}rem`,
          borderRadius: '50%',
          margin: `${marginHorizontal}rem ${marginVertical}rem`,
        },
        filled && styles.InputDot_filled,
      )}
    />
  );
}

InputDot.propTypes = propTypes;
InputDot.defaultProps = defaultProps;

export default withStyles(({ aeroPay: { color, zIndex } }) => ({
  InputDot: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: zIndex + 1,
    transition: 'background-color 0.1s ease',
    border: `0.05rem solid ${color.core.secondary}`,
    backgroundColor: `${color.core.white}`,
  },

  InputDot_filled: {
    backgroundColor: `${color.core.secondary}`,
  },

}))(InputDot);
