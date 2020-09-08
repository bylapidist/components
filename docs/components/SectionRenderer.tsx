import React from 'react';
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown/Markdown';
import { Text } from '../../src/components/text';
import { Heading, HeadingSize } from '../../src/components/heading';
import { Logo } from '../../src/components/logo';
import { Link } from '../../src/components/link';
import { Box } from '../../src/components/box';

export interface SectionRendererProps {
    readonly name: string;
    readonly description: string;
    readonly slug: string;
    readonly filepath: string;
    readonly content: React.ReactNode;
    readonly components: React.ReactNode;
    readonly sections: React.ReactNode;
    readonly isolated: boolean;
    readonly depth: HeadingSize;
    readonly pagePerSection: boolean;
}

const SectionRenderer: React.FC<SectionRendererProps> = (props) => {
    const { description, content, sections, components, slug } = props;

    return (
        <>
            <Box styles={{ marginBottom: '16' }}>
                <Logo
                    styles={{
                        marginBottom: '3',
                        sizeWidth: '16',
                        breakpoints: { md: { sizeWidth: '20' } }
                    }}
                    animated
                />
                <Heading
                    size={1}
                    styles={{
                        textColor: { group: 'grey', shade: 'dark' },
                        fontWeight: 'black',
                        fontSize: '6'
                    }}
                >
                    Lapidist Components
                </Heading>
                <Link
                    href="https://github.com/bylapidist/components"
                    target="_blank"
                    rel="noreferrer noopener"
                    styles={{
                        textColor: { group: 'grey', shade: 'base' },
                        borderBottomColor: { group: 'grey', shade: 'light' },
                        pseudo: {
                            ':hover': {
                                borderBottomColor: {
                                    group: 'primary',
                                    shade: 'base'
                                }
                            }
                        }
                    }}
                >
                    github.com/bylapidist/components
                </Link>
            </Box>
            <Text as="section" data-testid={`section-${slug}`}>
                {description && <Markdown text={description} />}
                {content}
                {sections}
                {components}
            </Text>
        </>
    );
};

export default SectionRenderer;
