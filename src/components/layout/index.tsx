import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PropsWithIdAndClassname } from '../../utilities/common';
import { getWidth, NumberOrString } from '../theme-provider/theme';

export interface LayoutProps
    extends PropsWithIdAndClassname,
        PropsWithChildren<{}> {
    readonly header?: JSX.Element;
    readonly sidebar?: JSX.Element;
    readonly main?: JSX.Element;
    readonly footer?: JSX.Element;
    readonly sidebarWidth?: NumberOrString;
}

const generateWrapper: React.FC<LayoutProps & { type: string }> = ({
    id,
    className,
    children,
    type
}) =>
    React.createElement(
        type,
        {
            id,
            className
        },
        children
    );

const HeaderWrapper: React.FC<LayoutProps> = ({ id, className, header }) =>
    generateWrapper({ type: 'header', id, className, children: header });

const SidebarWrapper: React.FC<LayoutProps> = ({ id, className, sidebar }) =>
    generateWrapper({
        type: 'aside',
        id,
        className,
        children: sidebar
    });

const MainWrapper: React.FC<LayoutProps> = ({ id, className, children }) => {
    return generateWrapper({
        type: 'main',
        id,
        className,
        children
    });
};

const FooterWrapper: React.FC<LayoutProps> = ({ id, className, footer }) =>
    generateWrapper({ type: 'footer', id, className, children: footer });

const SectionWrapper: React.FC<LayoutProps> = ({ id, className, children }) =>
    generateWrapper({ type: 'section', id, className, children });

const Header: React.FC<LayoutProps> = styled(HeaderWrapper)`
    flex: 0 0 auto;
`;

const Sidebar: React.FC<LayoutProps> = styled(SidebarWrapper)`
    flex: 0 0 auto;
    position: relative;
    min-width: 0;

    ${(props): string =>
        props.sidebarWidth
            ? `width: ${getWidth(props.theme, props.sidebarWidth)}`
            : `width: ${getWidth(props.theme, '1/4')}`};
`;

const Main: React.FC<LayoutProps> = styled(MainWrapper)`
    flex: auto;
    min-height: 0;
`;

const Footer: React.FC<LayoutProps> = styled(FooterWrapper)``;

const Section: React.FC<LayoutProps> = styled(SectionWrapper)`
    display: flex;
    flex: auto;
    flex-direction: ${({ sidebar }): string => (sidebar ? 'row' : 'column')};
    min-height: 0;
`;

export const Layout: React.FC<LayoutProps> = ({
    id,
    className,
    children,
    header,
    sidebar,
    main,
    footer,
    sidebarWidth
}) => (
    <div id={id} className={className}>
        {header && <Header header={header} />}
        {sidebar ? (
            <Section sidebar={sidebar}>
                <Sidebar sidebar={sidebar} sidebarWidth={sidebarWidth} />
                <Main>
                    {main}
                    {children}
                </Main>
            </Section>
        ) : (
            <Main>
                {main}
                {children}
            </Main>
        )}
        {footer && <Footer footer={footer} />}
    </div>
);

Layout.displayName = 'Layout';
