import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../../../theme-provider';
import { PanelButtons } from './index';

const setup = (Component: React.ReactElement) =>
    render(<ThemeProvider>{Component}</ThemeProvider>);

const defaultProps = {
    buttons: undefined
};

test('it works', () => {
    const { container } = setup(<PanelButtons {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with buttons', () => {
    const { container, getByText, getAllByRole } = setup(
        <PanelButtons
            {...defaultProps}
            buttons={[
                {
                    title: 'Button 1',
                    props: { kind: 'primary', variant: 'medium' }
                },
                {
                    title: 'Button 2',
                    props: { kind: 'secondary', variant: 'medium' }
                }
            ]}
        />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Button 1')).toBeTruthy();
    expect(getByText('Button 2')).toBeTruthy();
    expect(getAllByRole('button').length).toBe(2);
});
