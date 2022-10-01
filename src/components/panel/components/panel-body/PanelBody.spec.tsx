import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { ThemeProvider } from '../../../theme-provider';
import { PanelBody } from './index';

const setup = (panel: React.ReactElement) =>
    render(<ThemeProvider>{panel}</ThemeProvider>);

const defaultProps = {
    image: undefined,
    heading: undefined
};

test('it works', () => {
    const { container, getByText } = setup(
        <PanelBody {...defaultProps}>body</PanelBody>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('body')).toBeTruthy();
});

test('it works with image', () => {
    const { container, getByText, getByAltText } = setup(
        <PanelBody {...defaultProps} image={{ src: '', alt: 'test' }}>
            body
        </PanelBody>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('body')).toBeTruthy();
    expect(getByAltText('test')).toBeTruthy();
});

test('it works with heading', () => {
    const { container, getByText } = setup(
        <PanelBody
            {...defaultProps}
            heading={{ title: 'heading', props: { as: 'h2' } }}
        >
            body
        </PanelBody>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(getByText('heading')).toBeTruthy();
    expect(getByText('body')).toBeTruthy();
    expect(container.querySelectorAll('h2').length).toBe(1);
});
