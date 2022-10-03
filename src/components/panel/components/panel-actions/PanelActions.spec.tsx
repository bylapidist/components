import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../../../theme-provider';
import { PanelActions } from './index';
import { PanelStatusType } from '../../index';

const setup = (Component: React.ReactElement) =>
    render(<ThemeProvider>{Component}</ThemeProvider>);

afterEach(cleanup);

const statuses: PanelStatusType[] = ['none', 'info', 'warning', 'error'];

const defaultProps = {
    tag: undefined,
    buttons: undefined,
    status: undefined
};

test('it works', () => {
    const { container } = setup(<PanelActions {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with tag', () => {
    const { container, getByText } = setup(
        <PanelActions
            {...defaultProps}
            tag={{ title: 'v1.0.0', props: { kind: 'primary' } }}
        />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('v1.0.0')).toBeTruthy();
});

test('it works with buttons', () => {
    const { container, getByText, getAllByRole } = setup(
        <PanelActions
            {...defaultProps}
            buttons={[
                { title: 'Button 1', props: { kind: 'primary' } },
                { title: 'Button 2', props: { kind: 'secondary' } }
            ]}
        />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Button 1')).toBeTruthy();
    expect(getByText('Button 2')).toBeTruthy();
    expect(getAllByRole('button').length).toBe(2);
});

test.each(statuses)('it works with status', (status) => {
    const { container } = setup(<PanelActions status={status} />);
    expect(container.firstChild).toMatchSnapshot();
});
