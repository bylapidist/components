import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Button } from '../button';
import {
    ButtonGroup,
    ButtonGroupChildrenType,
    ButtonGroupPropType
} from './index';

const sameButtons = [
    <Button key="0" type="button" kind="primary">
        Button
    </Button>,
    <Button key="1" type="button" kind="primary">
        Button
    </Button>,
    <Button key="2" type="button" kind="primary">
        Button
    </Button>
];

const differentButtons = [
    <Button key="0" type="button" kind="primary">
        Button
    </Button>,
    <Button key="1" type="button" kind="secondary">
        Button
    </Button>,
    <Button key="2" type="button" kind="tertiary">
        Button
    </Button>
];

const twoButtons = [
    <Button key="0" type="button" kind="primary">
        Button
    </Button>,
    <Button key="1" type="button" kind="primary">
        Button
    </Button>
];

const setup = (
    props?: ButtonGroupPropType,
    children: ButtonGroupChildrenType = sameButtons
) =>
    render(
        <ThemeProvider>
            <ButtonGroup {...props}>{children}</ButtonGroup>
        </ThemeProvider>
    );

test('it works with same buttons', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with different buttons', () => {
    const { container } = setup({}, differentButtons);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with two buttons', () => {
    const { container } = setup({}, twoButtons);
    expect(container.firstChild).toMatchSnapshot();
});
