import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { IProps, NewsPage } from '../components/NewsPage';
import { longText } from './data/constants';

export default {
  title: 'Example/NewsPage',
  component: NewsPage,
  decorators: [
    (Component) => (
      <MemoryRouter initialEntries={['news/1']}>
        <Component />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<IProps> = () => <NewsPage />;

export const LongNews = Template.bind({});
LongNews.parameters = {
  axios: {
    json: {
      success: true,
      data: {
        newsGuid: '1',
        title: longText,
        annotation: `${longText} ${longText}`,
        text: `${longText} ${longText} ${longText}`,
        createDate: new Date(),
        changeDate: new Date(),
      },
    },
  },
};

export const ErrorNews = Template.bind({});
ErrorNews.parameters = {
  axios: {
    json: {
      success: false,
      data: null,
    },
  },
};
ErrorNews.storyName = 'News not found';
