import type { Meta, StoryObj } from '@storybook/angular';

import { MyHeroComponent } from './my-hero.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MyHeroComponent> = {
  title: 'Component/Hero',
  component: MyHeroComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // render: (args: HeroComponent) => ({
  //   props: {
  //     backgroundColor: null,
  //     ...args,
  //   },
  // }),
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
};

export default meta;
type Story = StoryObj<MyHeroComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'A better way to ship your projects',
    desc: 'Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.',
  },
};
