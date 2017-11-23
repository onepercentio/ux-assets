import React from 'react';
import { storiesOf } from '@storybook/react';

import NumericKeyboardWrapper from '../examples/NumericKeyboardWrapper';

storiesOf('Numeric Keyboard', module)
  .addWithInfo('keyboard PIN', () => (
    <NumericKeyboardWrapper />
  ));
