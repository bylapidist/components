import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Logo, logoAnimation } from './index';
import { slideUpLeft, thinking } from '../../utilities';
import { defaultTheme } from '../theme-provider';

test('it works', () => {
    const tree = renderer.create(<Logo size="32px" />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works thinking', () => {
    const tree = renderer.create(<Logo size="32px" thinking />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works animated', () => {
    const tree = renderer.create(<Logo size="32px" animated />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('it works with different colours', () => {
    const tree = renderer
        .create(
            <Logo size="32px" bUpColor="#fff" bDownColor="#fff" dColor="#fff" />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('logoAnimation applies thinking animation', () => {
    const animation = logoAnimation(
        {
            thinking: true,
            points: '0,0 0,16 16,16',
            animated: false,
            color: defaultTheme.colors.greens.base
        },
        null,
        thinking()
    );

    const css = JSON.parse(JSON.stringify(animation[4]));

    expect(css).toEqual({
        name: 'hzFDkX',
        id: 'sc-keyframes-hzFDkX',
        stringifyArgs: [
            '\n    0% { opacity: 1 }\n    50% { opacity: 0.6 }\n    100% { opacity: 1 }\n',
            'hzFDkX',
            '@keyframes'
        ]
    });
});

test('logoAnimation applies sliding animation', () => {
    const animation = logoAnimation(
        {
            thinking: false,
            points: '0,0 0,16 16,16',
            animated: true,
            color: defaultTheme.colors.greens.base
        },
        slideUpLeft(),
        null
    );

    const css = JSON.parse(JSON.stringify(animation[3]));

    expect(css).toEqual({
        name: 'fOlPOW',
        id: 'sc-keyframes-fOlPOW',
        stringifyArgs: [
            '\n    0% { transform: translate3d(100%,100%,0) }\n    80% { transform: translateZ(0) }\n    90% { transform: translate3d(5%,5%,0) }\n    to { transform: translateZ(0) }\n',
            'fOlPOW',
            '@keyframes'
        ]
    });
});
