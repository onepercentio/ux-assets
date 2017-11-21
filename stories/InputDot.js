import React from 'react';
import { storiesOf } from '@storybook/react';

import InputDotWrapper from '../examples/InputDotWrapper';

storiesOf('Input Dot', module)
  .addWithInfo('masked input pass', () => (
    <InputDotWrapper />
  ));
