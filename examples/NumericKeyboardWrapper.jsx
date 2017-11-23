import React from 'react';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { clearInterval } from 'timers';

import NumericKeyboard from '../src/components/NumericKeyboard';

const propTypes = { ...withStylesPropTypes };

// in your real code use style.spacing instead
const MARGIN_VERTICAL = 2;
const SIZE = 2;

class NumericKeyboardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.invertFilled.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.inverval);
  }

  invertFilled() {
    this.setState({
      filled: !this.state.filled,
    });
  }

  render() {
    const {
      styles,
    } = this.props;

    const {
      filled,
    } = this.state;

    return (
      <div {...css(styles.container)}>
        <NumericKeyboard
          {...this.props}
        />
      </div>
    );
  }
}

NumericKeyboardWrapper.propTypes = propTypes;

export default withStyles(({ aeroPay: { color } }) => ({
  container: {
    backgroundColor: color.core.white,
    display: 'flex',
    flex: 1,
    padding: '25px',
    flexDirection: 'column',
  },
}))(NumericKeyboardWrapper);
