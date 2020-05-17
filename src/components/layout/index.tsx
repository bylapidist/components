import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../theme-provider';

export interface LayoutProps {
    /** The Layout's id. */
    readonly id?: string;
    /** The Layout's classname. */
    readonly className?: string;
    /** The Layout's children. */
    readonly children?: React.ReactNode;
    /** The Layout's header. */
    readonly header?: React.ReactNode;
    /** The Layout's sidebar. */
    readonly sidebar?: React.ReactNode;
    /** The Layout's main content. */
    readonly main?: React.ReactNode;
    /** The Layout's footer. */
    readonly footer?: React.ReactNode;
}

const HeaderWrapper: React.FC<LayoutProps> = ({ id, className, header }) => (
    <header id={id} className={className}>
        {header}
    </header>
);

const SidebarWrapper: React.FC<LayoutProps> = ({ id, className, sidebar }) => (
    <aside id={id} className={className}>
        {sidebar}
    </aside>
);

const MainWrapper: React.FC<LayoutProps> = ({
    id,
    className,
    children,
    main
}) => (
    <main id={id} className={className}>
        {main}
        {children}
    </main>
);

const FooterWrapper: React.FC<LayoutProps> = ({ id, className, footer }) => (
    <footer id={id} className={className}>
        {footer}
    </footer>
);

const Header: React.FC<LayoutProps> = styled(HeaderWrapper)`
    flex: 0 0 auto;
    height: ${defaultTheme.sizing.xxl};
    padding: ${defaultTheme.sizing.xxxs};
    line-height: ${defaultTheme.sizing.xxl};
`;

const Sidebar: React.FC<LayoutProps> = styled(SidebarWrapper)`
    flex: 0 0 auto;
    position: relative;
    min-width: 0;
`;

const Main: React.FC<LayoutProps> = styled(MainWrapper)`
    flex: auto;
    min-height: 0;
`;

const Footer: React.FC<LayoutProps> = styled(FooterWrapper)`
    padding: ${defaultTheme.sizing.m};
`;

const LayoutWrapper: React.FC<LayoutProps> = styled.section<LayoutProps>`
    display: flex;
    flex: auto;
    flex-direction: ${({ sidebar }): string => (sidebar ? 'row' : 'column')};
    min-height: 0;
`;

const Layout: React.FC<LayoutProps> = ({
    id,
    className,
    children,
    header,
    sidebar,
    main,
    footer
}) => (
    <div id={id} className={className}>
        {header && <Header header={header} />}
        {sidebar ? (
            <LayoutWrapper sidebar={sidebar}>
                <Sidebar sidebar={sidebar} />
                <Main main={main}>{children}</Main>
            </LayoutWrapper>
        ) : (
            <Main main={main}>{children}</Main>
        )}
        {footer && <Footer footer={footer} />}
    </div>
);

export default Layout;
