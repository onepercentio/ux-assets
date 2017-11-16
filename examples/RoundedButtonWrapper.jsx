import React from 'react';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

import RoundedButton from '../src/components/RoundedButton';

const propTypes = { ...withStylesPropTypes };

const MARGIN_VERTICAL = 1.6;
const MARGIN_HORIZONTAL = 1.2;
const SIZE = 4;

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
        <div {...css(styles.lineContainer)}>
          <RoundedButton
            {...this.props}
            label="1"
            size={SIZE}
            onClick={() => { window.alert('yoyo') }}
          />
          <RoundedButton
            {...this.props}
            label="2"
            size={SIZE}
            marginVertical={MARGIN_VERTICAL}
            onClick={() => { window.alert('yoyo') }}
          />
          <RoundedButton
            {...this.props}
            label="3"
            size={SIZE}
            onClick={() => { window.alert('yoyo') }}
          />
        </div>
        <div {...css(styles.lineContainer)}>
          <RoundedButton
            {...this.props}
            label="4"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            onClick={() => { window.alert('yoyo') }}
          />
          <RoundedButton
            {...this.props}
            label="5"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            marginVertical={MARGIN_VERTICAL}
            onClick={() => { window.alert('yoyo') }}
          />
          <RoundedButton
            {...this.props}
            label="6"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            onClick={() => { window.alert('yoyo') }}
          />
        </div>
        <div {...css(styles.lineContainer)}>
          <RoundedButton
            {...this.props}
            label="7"
            size={SIZE}
            onClick={() => { window.alert('yoyo') }}
          />
          <RoundedButton
            {...this.props}
            label="8"
            size={SIZE}
            marginVertical={MARGIN_VERTICAL}
            onClick={() => { window.alert('yoyo') }}
          />
          <RoundedButton
            {...this.props}
            label="9"
            size={SIZE}
            onClick={() => { window.alert('yoyo') }}
          />
        </div>
        <div {...css(styles.lineContainer)}>
          <RoundedButton
            {...this.props}
            label="<"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            onClick={() => { window.alert('yoyo') }}
          />
          <RoundedButton
            {...this.props}
            label="0"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            marginVertical={MARGIN_VERTICAL}
            onClick={() => { window.alert('yoyo') }}
          />
          <RoundedButton
            {...this.props}
            label=">"
            size={SIZE}
            marginHorizontal={MARGIN_HORIZONTAL}
            onClick={() => { window.alert('yoyo') }}
          />
        </div>
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
    flexDirection: 'column',
  },
  lineContainer: {
    display: 'inherit',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
}))(RoundedButtonWrapper);
