import React from 'react';
// import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';
import { action } from '@storybook/addon-actions';

import Button from '.';

export default {
  title: 'Button',
  component: Button
};

export const Text = () => (
  <Button look="primary" onClick={action('Button onClick')}>
    Hello Button
  </Button>
);

export const Emoji = () => (
  <Button look="primary" onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

/* <Meta title="Test" />

Here's some _markdown_!

# Preview

<Preview>
  <Story name="button">
    <Button>hello</Button>
  </Story>
</Preview>

# Props

<Props of={Button} /> */
