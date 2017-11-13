import React from 'react';
import { storiesOf } from '@storybook/react';

import RoundedButtonWrapper from '../examples/RoundedButtonWrapper';

storiesOf('Rounded Button', module)
  .addWithInfo('with custom size', () => (
    <RoundedButtonWrapper/>
  ));
