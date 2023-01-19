import React from 'react';

import Bio from '../../components/Bio/Bio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Bio',
  component: Bio,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => (
<Bio 
headshot="https://pbs.twimg.com/profile_images/1602029653614628873/6t81Fb31_400x400.jpg"
name="Maddie Kessinger"
tagline="Helping others learn by doing! "
role="Full Stack Developer @ Unicode"

/>
)

export const Default = Template.bind({});


