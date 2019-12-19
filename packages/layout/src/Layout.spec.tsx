import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Layout from './index';

test('it works', () => {
    const tree = renderer
        .create(
            <Layout
                header={<p>Header</p>}
                sidebar={<p>Sidebar</p>}
                main={<p>Main</p>}
                footer={<p>Footer</p>}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
