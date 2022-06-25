import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { StatusMessage, StatusMessageVariantType } from './index';

const setup = (statusMessage: React.ReactElement) =>
    render(<ThemeProvider>{statusMessage}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(
        <StatusMessage message="I am a status message" />
    );
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with different variants', () => {
    const variants: StatusMessageVariantType[] = [
        'info',
        'success',
        'warning',
        'error'
    ];
    variants.forEach((variant) => {
        const { container } = setup(
            <StatusMessage variant={variant} message="I am a status message" />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});

test('it renders message', () => {
    const { getByText } = setup(
        <StatusMessage message="I am a status message" />
    );
    expect(getByText('I am a status message')).toBeTruthy();
});

test('it renders dismiss button', () => {
    const { getByRole } = setup(
        <StatusMessage message="I am a status message" dismissable />
    );
    expect(getByRole('button')).toBeTruthy();
});

test('it dismisses when dismiss button clicked', () => {
    const { queryByText, getByRole } = setup(
        <StatusMessage message="I am a status message" dismissable />
    );
    fireEvent.click(getByRole('button'));
    expect(queryByText('I am a status message')).toBeFalsy();
});
