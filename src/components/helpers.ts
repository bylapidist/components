const conditionalProperty = (
    enabled: boolean,
    property: string,
    style: string
) => (enabled ? `${property}: ${style};` : '');

export const textColour = (enabled: boolean, style: string) =>
    conditionalProperty(enabled, 'color', style);

export const backgroundColour = (enabled: boolean, style: string) =>
    conditionalProperty(enabled, 'background-color', style);

export const borderColour = (enabled: boolean, style: string) =>
    conditionalProperty(enabled, 'border-color', style);
