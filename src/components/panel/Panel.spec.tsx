import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../theme-provider';
import { Panel, PanelStatusType } from './index';
import { ElevationHeight } from '../elevated';

const setup = (panel: React.ReactElement) =>
    render(<ThemeProvider>{panel}</ThemeProvider>);

test('it works', () => {
    const { container } = setup(<Panel>Hello world</Panel>);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with heading', () => {
    const { container, getByText } = setup(
        <Panel heading={{ title: 'heading', props: { as: 'h2' } }}>body</Panel>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('heading')).toBeTruthy();
    expect(getByText('body')).toBeTruthy();
    expect(container.querySelectorAll('h2').length).toBe(1);
});

test('it works with tag', () => {
    const { container, getByText } = setup(
        <Panel tag={{ title: 'v1.0.0', props: { kind: 'primary' } }}>
            body
        </Panel>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('v1.0.0')).toBeTruthy();
    expect(getByText('body')).toBeTruthy();
});

test('it works with button', () => {
    const { container, getByText, getAllByRole } = setup(
        <Panel buttons={[{ title: 'Edit', props: { kind: 'primary' } }]}>
            body
        </Panel>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('Edit')).toBeTruthy();
    expect(getByText('body')).toBeTruthy();
    expect(getAllByRole('button').length).toBe(1);
});

test('it works with dismissable', () => {
    const { container, getByText, getAllByRole } = setup(
        <Panel dismissable>body</Panel>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('body')).toBeTruthy();
    expect(getAllByRole('button').length).toBe(1);
});

test('it works loading', () => {
    const { container } = setup(<Panel loading>Hello world</Panel>);
    expect(container.firstChild).toMatchSnapshot();
});

test('it works with image', () => {
    const { container, getByAltText } = setup(
        <Panel image={{ src: '', alt: 'test' }}>Hello world</Panel>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByAltText('test')).toBeTruthy();
});

test('it works with status', () => {
    const statuses: PanelStatusType[] = ['none', 'info', 'warning', 'error'];

    statuses.forEach((status) => {
        const { container } = setup(<Panel status={status}>Hello world</Panel>);
        expect(container.firstChild).toMatchSnapshot();
    });
});

test('it works with elevation', () => {
    const elevations: ElevationHeight[] = ['1', '2', '3', '4'];

    elevations.forEach((elevation) => {
        const { container } = setup(
            <Panel elevation={elevation}>Hello world</Panel>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
