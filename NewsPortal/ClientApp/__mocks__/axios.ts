import { AxiosError, AxiosResponse } from 'axios';

export { AxiosError, AxiosResponse };

let nextJson;
const axios = {
  create() {
    return {
      get() {
        return nextJson;
      },
      post() {
        return nextJson;
      },
    };
  },
  nextJson: null,
};

export default axios;

// the decorator to be used in ./storybook/preview to apply the mock to all stories
export function decorator(story, { parameters }) {
  if (parameters && parameters.axios) {
    nextJson = new Promise((resolve) => {
      resolve({
        data: parameters.axios.json,
      });
    });
  }
  return story();
}
