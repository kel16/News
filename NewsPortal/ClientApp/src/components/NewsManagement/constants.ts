export enum Steps {
  Category,
  Settings,
  Submit,
}

export const StepsName = new Map<number, string>([
  [Steps.Category, "Select a category"],
  [Steps.Settings, "Create news"],
  [Steps.Submit, "Confirm"],
]);
