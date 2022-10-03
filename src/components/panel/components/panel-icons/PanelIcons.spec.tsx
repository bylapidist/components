import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../../../theme-provider';
import { PanelIcons } from './index';
import { PanelStatusType } from '../../index';

const setup = (Component: React.ReactElement) =>
    render(<ThemeProvider>{Component}</ThemeProvider>);

afterEach(cleanup);

const statuses: PanelStatusType[] = ['none', 'info', 'warning', 'error'];

const defaultProps = {
    status: undefined,
    tag: undefined
};

test('it works', () => {
    const { container } = setup(<PanelIcons {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
});

test.each(statuses)('it works with status', (status) => {
    const { container } = setup(<PanelIcons status={status} />);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with tag', () => {
    const { container, getByText } = setup(
        <PanelIcons
            {...defaultProps}
            tag={{ title: 'v1.0.0', props: { kind: 'primary' } }}
        />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('v1.0.0')).toBeTruthy();
});
