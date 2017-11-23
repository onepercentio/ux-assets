import React from 'react';
import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';

import RoundedButton from './RoundedButton';
import InputDot from './InputDot';

import {
  BUTTON_CANCEL,
  BUTTON_CONFIRM,
  BUTTON_KEY,
} from '../constants';

const propTypes = forbidExtraProps({
  ...withStylesPropTypes,
  value: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  digits: nonNegativeInteger,
});

const defaultProps = {
  digits: 4,
  value: [],
};

// in your real code use style.spacing instead
const MARGIN_VERTICAL = 1.6;
const MARGIN_HORIZONTAL = 1.2;
const SIZE = 4;

class NumericKeyboard extends React.Component {
  go() {
    this.setState({});
  }

  render() {
    const {
      digits,
      value,
      styles,
    } = this.props;

    const dots = [];

    for (let i = 1; i - 1 < digits; i += 1) {
      dots.push(<InputDot key={i} size={2} marginVertical={0.2} filled={value.length >= i} />);
    }

    return (
      <div {...css(styles.container)}>
        <div {...css(styles.titleContainer)}>
          <br />
          <span {...css(styles.caption)}>Input your PIN</span>
          <span {...css(styles.subtitle)}>This pin gonna be used to save your data.</span>
          <br />
          <br />
        </div>
        <div {...css(styles.lineContainer)}>
          {dots}
        </div>
        <div {...css(styles.separator)}>
          <br />
          <br />
        </div>
        <div {...css(styles.lineContainer)}>
          <RoundedButton
            label="1"
            size={SIZE}
            onClick={() => { value.push('1'); }}
          />
          <RoundedButton
            label="2"
            size={SIZE}
            marginVertical={MARGIN_VERTICAL}
            onClick={() => { value.push('2'); }}
          />
          <RoundedButton
            label="3"
            size={SIZE}
            onClick={() => { value.push('3'); }}
          />
        </div>
        <div {...css(styles.lineContainer)}>
          <RoundedButton
            label="4"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            onClick={() => { value.push('4'); }}
          />
          <RoundedButton
            label="5"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            marginVertical={MARGIN_VERTICAL}
            onClick={() => { value.push('5'); }}
          />
          <RoundedButton
            label="6"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            onClick={() => { value.push('6'); }}
          />
        </div>
        <div {...css(styles.lineContainer)}>
          <RoundedButton
            label="7"
            size={SIZE}
            onClick={() => { value.push('7'); }}
          />
          <RoundedButton
            label="8"
            size={SIZE}
            marginVertical={MARGIN_VERTICAL}
            onClick={() => { value.push('8'); }}
          />
          <RoundedButton
            label="9"
            size={SIZE}
            onClick={() => { value.push('9'); }}
          />
        </div>
        <div {...css(styles.lineContainer)}>
          <RoundedButton
            label="X"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            onClick={() => { value.pop(); }}
            type={BUTTON_CANCEL}
          />
          <RoundedButton
            label="0"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            marginVertical={MARGIN_VERTICAL}
            onClick={() => { value.push('0'); }}
            type={BUTTON_KEY}
          />
          <RoundedButton
            label=">"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            onClick={() => { window.alert(value); }}
            type={BUTTON_CONFIRM}
          />
        </div>
      </div>
    );
  }
}

NumericKeyboard.propTypes = propTypes;
NumericKeyboard.defaultProps = defaultProps;

export default withStyles(({ aeroPay: { color, font } }) => ({
  container: {
    backgroundColor: color.core.primary,
    display: 'flex',
    flex: 1,
    padding: '25px',
    flexDirection: 'column',
  },
  lineContainer: {
    display: 'inherit',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  separator: {
    display: 'inherit',
    flex: 1,
  },
  titleContainer: {
    display: 'inherit',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    fontSize: font.caption.size,
    color: color.text,
  },
  subtitle: {
    fontSize: '0.75rem',
    color: color.core.gray_3,
  },
}))(NumericKeyboard);
