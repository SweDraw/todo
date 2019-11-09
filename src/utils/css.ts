export const setCssVariable = (varName: string, newValue: string) =>
  document.documentElement.style.setProperty(varName, newValue);