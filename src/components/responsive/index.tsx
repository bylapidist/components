import React, { PropsWithChildren } from 'react';
import { withTheme } from 'styled-components';
import { allBreakpoints, allMediaQueries, Theme } from '@lapidist/styles';

export interface ResponsiveProps extends PropsWithChildren<{}> {
    readonly theme: Theme;
    readonly breakpoint?: string;
    renderComponent?(breakpoint?: string): React.ReactNode;
}

export interface ResponsiveState {
    matches?: string;
}

class BaseResponsive extends React.Component<ResponsiveProps, ResponsiveState> {
    private triggerAtMediaQueries: {
        [breakpoint: string]: MediaQueryList;
    } = {};
    private readonly allMediaQueries: {
        [breakpoint: string]: string;
    } = {};

    private matchesQuery(): string | undefined {
        const queries = this.triggerAtMediaQueries;
        const matchingDevices: string[] = [];

        for (const breakpoint of Object.keys(queries)) {
            if (queries[breakpoint].matches) {
                matchingDevices.push(breakpoint);
            }
        }

        if (matchingDevices.length > 0) {
            return matchingDevices.pop();
        }

        return undefined;
    }

    private updateMatches(): void {
        this.setState({
            matches: this.matchesQuery()
        });
    }

    constructor(props: Readonly<ResponsiveProps>) {
        super(props);
        const { breakpoint, theme } = this.props;

        this.state = {
            matches: undefined
        };

        const breakpointsToRenderAt: string[] = breakpoint
            ? [breakpoint]
            : [...allBreakpoints(theme)];

        for (const breakpointToRenderAt of breakpointsToRenderAt) {
            this.triggerAtMediaQueries[
                breakpointToRenderAt
            ] = window.matchMedia(this.allMediaQueries[breakpointToRenderAt]);
        }

        this.allMediaQueries = allMediaQueries(theme);
    }

    componentDidMount(): void {
        const { breakpoint, theme } = this.props;
        const breakpointsToRenderAt: string[] = breakpoint
            ? [breakpoint]
            : [...allBreakpoints(theme)];

        for (const breakpointToRenderAt of breakpointsToRenderAt) {
            this.triggerAtMediaQueries[
                breakpointToRenderAt
            ] = window.matchMedia(this.allMediaQueries[breakpointToRenderAt]);
            this.triggerAtMediaQueries[breakpointToRenderAt].addListener(
                this.updateMatches.bind(this)
            );
            this.updateMatches();
        }
    }

    componentWillUnmount(): void {
        for (const breakpoint of Object.keys(this.triggerAtMediaQueries)) {
            this.triggerAtMediaQueries[breakpoint].removeListener(
                this.updateMatches.bind(this)
            );
        }
    }

    render(): React.ReactNode {
        const { children, renderComponent } = this.props;
        const { matches } = this.state;

        if (renderComponent) {
            return renderComponent(matches);
        }

        return children && matches ? <>{children}</> : false;
    }
}

export const Responsive = withTheme(BaseResponsive);

Responsive.displayName = 'Responsive';
