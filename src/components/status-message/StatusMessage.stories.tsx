import * as React from 'react';
import { ThemeProvider } from '../theme-provider';
import { StatusMessage } from './index';

export default {
    title: 'Components/StatusMessage',
    component: StatusMessage,
    decorators: [(getStory) => <ThemeProvider>{getStory()}</ThemeProvider>]
};

const templateStyles = {};

const DefaultTemplate = (args) => <StatusMessage {...args} />;

export const Info = DefaultTemplate.bind({});
Info.args = {
    variant: 'info',
    message: 'I am a status message',
    styles: templateStyles
};

export const Warning = DefaultTemplate.bind({});
Warning.args = {
    variant: 'warning',
    message: 'I am a status message',
    styles: templateStyles
};

export const Error = DefaultTemplate.bind({});
Error.args = {
    variant: 'error',
    message: 'I am a status message',
    styles: templateStyles
};

export const Success = DefaultTemplate.bind({});
Success.args = {
    variant: 'success',
    message: 'I am a status message',
    styles: templateStyles
};

export const InfoDismissable = DefaultTemplate.bind({});
InfoDismissable.args = {
    variant: 'info',
    dismissable: true,
    message: 'I am a status message',
    styles: templateStyles
};

export const WarningDismissable = DefaultTemplate.bind({});
WarningDismissable.args = {
    variant: 'warning',
    dismissable: true,
    message: 'I am a status message',
    styles: templateStyles
};

export const ErrorDismissable = DefaultTemplate.bind({});
ErrorDismissable.args = {
    variant: 'error',
    dismissable: true,
    message: 'I am a status message',
    styles: templateStyles
};

export const SuccessDismissable = DefaultTemplate.bind({});
SuccessDismissable.args = {
    variant: 'success',
    dismissable: true,
    message: 'I am a status message',
    styles: templateStyles
};
