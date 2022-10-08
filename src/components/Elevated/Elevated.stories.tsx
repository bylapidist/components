import * as React from 'react';
import { BaseProps } from '../types';
import Elevated, { ElevatedProps } from './index';

export default {
    title: 'Components/Elevated',
    component: Elevated,
    decorators: [(getStory) => getStory()]
};

const defaultArgs: BaseProps & ElevatedProps = {
    as: 'div',
    testId: 'Elevated',
    elevation: 0
};

const DefaultTemplate = (args: BaseProps & ElevatedProps) => (
    <Elevated {...args}>Hello world</Elevated>
);

export const ElevationScale = () => (
    <>
        <DefaultTemplate elevation={0} />
        <DefaultTemplate elevation={1} />
        <DefaultTemplate elevation={2} />
        <DefaultTemplate elevation={3} />
        <DefaultTemplate elevation={4} />
    </>
);
ElevationScale.parameters = {
    controls: { disable: true },
    actions: { disable: true }
};

export const NoElevation = DefaultTemplate.bind({});
NoElevation.args = {
    ...defaultArgs,
    elevation: 0
};

export const LowestElevation = DefaultTemplate.bind({});
LowestElevation.args = {
    ...defaultArgs,
    elevation: 1
};

export const LowerElevation = DefaultTemplate.bind({});
LowerElevation.args = {
    ...defaultArgs,
    elevation: 2
};

export const HigherElevation = DefaultTemplate.bind({});
HigherElevation.args = {
    ...defaultArgs,
    elevation: 3
};

export const HighestElevation = DefaultTemplate.bind({});
HighestElevation.args = {
    ...defaultArgs,
    elevation: 4
};
