import React from 'react';
// import PropTypes from 'prop-types';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

import RoundedButton from '../src/components/RoundedButton';

const propTypes = { ...withStylesPropTypes };

class RoundedButtonWrapper extends React.Component {
  go() {
    this.setState({});
  }

  render() {
    const {
      styles,
    } = this.props;

    return (
      <div {...css(styles.container)}>
        <RoundedButton
          {...this.props}
          label="3"
          size={3}
          onClick={() => { window.alert('yoyo') }}
        />
        <RoundedButton
          {...this.props}
          label="4"
          size={4}
          onClick={() => { window.alert('yoyo') }}
        />
        <RoundedButton
          {...this.props}
          label="5"
          size={5}
          onClick={() => { window.alert('yoyo') }}
        />
      </div>
    );
  }
}

RoundedButtonWrapper.propTypes = propTypes;

export default withStyles(({ aeroPay: { color } }) => ({
  container: {
    backgroundColor: color.core.primary,
    display: 'flex',
    flex: 1,
    padding: '25px',
  },
}))(RoundedButtonWrapper);
