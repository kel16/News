// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IProps, NewsCard } from '../components/MainPage/NewsCard';
import { longText } from './data/constants';

export default {
  title: 'Example/NewsCard',
  component: NewsCard,
  decorators: [
    (Component) => (
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<IProps> = (args) => <NewsCard {...args} />;

export const EmptyNews = Template.bind({});
EmptyNews.args = {
  news: {
    newsGuid: '',
    title: '',
    annotation: '',
    text: '',
    createDate: new Date(),
    changeDate: new Date(),
  },
};
EmptyNews.storyName = 'News with no data';

export const ShortNews = Template.bind({});
ShortNews.args = {
  news: {
    newsGuid: '',
    title: 'T',
    annotation: 'A',
    text: 'T',
    createDate: new Date(),
    changeDate: new Date(),
  },
};
ShortNews.storyName = 'Very short news';

export const BigNews = Template.bind({});
BigNews.args = {
  news: {
    newsGuid: '',
    title: longText,
    annotation: `${longText} ${longText}`,
    text: `${longText} ${longText} ${longText}`,
    createDate: new Date(),
    changeDate: new Date(),
  },
};
BigNews.storyName = 'News with too much text';
