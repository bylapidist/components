import React, { PropsWithChildren } from 'react';
import { breakpoint, Device, PropsWithIdAndClassname } from '../../utilities';

export interface ResponsiveProps
    extends PropsWithIdAndClassname,
        PropsWithChildren<{}> {
    device?: Device;
    renderComponent?(device?: Device): React.ReactNode;
}

export interface ResponsiveState {
    matches?: Device;
}

export class Responsive extends React.Component<
    ResponsiveProps,
    ResponsiveState
> {
    private triggerAtMediaQueries: { [device: string]: MediaQueryList } = {};

    private matchesQuery(): Device | undefined {
        const queries = this.triggerAtMediaQueries;

        for (const device of Object.keys(queries)) {
            if (queries[device].matches) {
                return device as Device;
            }
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
        const { device } = this.props;

        this.state = {
            matches: undefined
        };

        const devicesToRenderAt: Device[] = device
            ? [device]
            : ['mobile-large', 'tablet-large', 'laptop-large'];

        for (const deviceToRenderAt of devicesToRenderAt) {
            this.triggerAtMediaQueries[deviceToRenderAt] = window.matchMedia(
                breakpoint(deviceToRenderAt)
            );
        }
    }

    componentDidMount(): void {
        const { device } = this.props;
        const devicesToRenderAt: Device[] = device
            ? [device]
            : ['mobile-large', 'tablet-large', 'laptop-large'];

        for (const deviceToRenderAt of devicesToRenderAt) {
            this.triggerAtMediaQueries[deviceToRenderAt] = window.matchMedia(
                breakpoint(deviceToRenderAt)
            );
            this.triggerAtMediaQueries[deviceToRenderAt].addListener(
                this.updateMatches
            );
        }
    }

    componentWillUnmount(): void {
        for (const device of Object.keys(this.triggerAtMediaQueries)) {
            this.triggerAtMediaQueries[device].removeListener(
                this.updateMatches
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
