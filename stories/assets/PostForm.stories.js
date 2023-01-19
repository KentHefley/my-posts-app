import React from 'react';

import PostForm from '../../components/PostForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/PostForm',
  component: PostForm,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
<PostForm/>
)

export const Default = Template.bind({});


