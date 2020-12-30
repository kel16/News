import { decorator } from '../__mocks__/axios';

// Add the decorator to all stories
export const decorators = [decorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
