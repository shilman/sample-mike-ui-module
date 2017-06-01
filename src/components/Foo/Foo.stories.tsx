import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Foo } from './Foo';


storiesOf('primitives', module)
  .add('Foo', () => {
    return (
      <Foo />
    );
  });
