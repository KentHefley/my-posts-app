import React from 'react';

import Post from '../../components/Post/Post';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Post',
  component: Post,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
<Post content='I’m working in Figma trying to design a new website that shows all of my tweets!' 
date='1/08/23' />
)

export const Default = Template.bind({});


