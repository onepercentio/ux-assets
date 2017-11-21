import React from 'react';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import { clearInterval } from 'timers';

import InputDot from '../src/components/InputDot';

const propTypes = { ...withStylesPropTypes };

// in your real code use style.spacing instead
const MARGIN_VERTICAL = 2;
const SIZE = 2;

class InputDotWrapper extends React.Component {
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
        <div {...css(styles.lineContainer)}>
          <InputDot
            {...this.props}
            marginVertical={MARGIN_VERTICAL}
            size={SIZE}
            filled={filled}
          />
          <InputDot
            {...this.props}
            marginVertical={MARGIN_VERTICAL}
            size={SIZE}
          />
          <InputDot
            {...this.props}
            marginVertical={MARGIN_VERTICAL}
            size={SIZE}
          />
        </div>
      </div>
    );
  }
}

InputDotWrapper.propTypes = propTypes;

export default withStyles(({ aeroPay: { color } }) => ({
  container: {
    backgroundColor: color.core.white,
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
}))(InputDotWrapper);
