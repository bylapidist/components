import React from 'react';
import { StyleGuideRendererProps } from './StyleGuideRenderer';
import { Logo } from '../../src/components/logo';
import { Heading } from '../../src/components/heading';
import { Text } from '../../src/components/text';
import { Link } from '../../src/components/link';
import { Box } from '../../src/components/box';

export const HomePage: React.FC<StyleGuideRendererProps> = ({ version }) => (
    <>
        <Logo
            styles={{
                marginBottom: '3',
                sizeWidth: '20',
                breakpoints: { md: { sizeWidth: '32' } }
            }}
            animated
        />
        <Heading
            size={1}
            styles={{
                marginBottom: '12',
                textColor: { group: 'grey', shade: 'dark' },
                fontWeight: 'bolder',
                fontSize: '6',
                breakpoints: { md: { fontSize: '8' } }
            }}
        >
            Lapidist Components
            <Text
                as="span"
                styles={{
                    textColor: { group: 'grey', shade: 'base' },
                    fontWeight: 'bold',
                    fontSize: '1',
                    paddingY: '1',
                    paddingX: '3'
                }}
            >
                {version}
            </Text>
        </Heading>
        <Text
            styles={{
                fontSize: '5',
                textColor: { group: 'grey', shade: 'base' },
                marginBottom: '16'
            }}
        >
            Opinionated{' '}
            <Link
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer noopener"
            >
                React
            </Link>{' '}
            UI library, built with{' '}
            <Link
                href="https://styled-components.com/"
                target="_blank"
                rel="noreferrer noopener"
            >
                styled-components
            </Link>{' '}
            and{' '}
            <Link
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer noopener"
            >
                TypeScript
            </Link>
            .
        </Text>
        <Box
            styles={{
                marginBottom: '64'
            }}
        >
            <Link
                styles={{
                    fontSize: '5'
                }}
                href="/#/Getting%20Started"
            >
                Get Started &#8594;
            </Link>
        </Box>
        <Text
            styles={{
                marginBottom: '32'
            }}
        >
            <Text styles={{ textColor: { group: 'grey', shade: 'base' } }}>
                Released under the MIT License. For full details see the{' '}
                <Link
                    href="https://github.com/bylapidist/components"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    GitHub
                </Link>{' '}
                repository.
            </Text>
            <Text styles={{ textColor: { group: 'grey', shade: 'base' } }}>
                Built with love by{' '}
                <Link
                    href="https://lapidist.net"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Lapidist
                </Link>{' '}
                in Scotland.
            </Text>
        </Text>
    </>
);
