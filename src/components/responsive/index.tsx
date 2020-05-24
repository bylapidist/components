import React, { PropsWithChildren } from 'react';
import {
    allDevices,
    allMediaQueries,
    Device,
    PropsWithIdAndClassname
} from '../../utilities';

export interface ResponsiveProps
    extends PropsWithIdAndClassname,
        PropsWithChildren<{}> {
    device?: Device;
    renderComponent?(devices?: Device): React.ReactNode;
}

export interface ResponsiveState {
    matches?: Device;
}

export class Responsive extends React.Component<
    ResponsiveProps,
    ResponsiveState
> {
    private triggerAtMediaQueries: { [device: string]: MediaQueryList } = {};
    private readonly allMediaQueries: {
        [device: string]: string;
    } = allMediaQueries();

    private matchesQuery(): Device | undefined {
        const queries = this.triggerAtMediaQueries;
        const matchingDevices: Device[] = [];

        for (const device of Object.keys(queries)) {
            if (queries[device].matches) {
                matchingDevices.push(device as Device);
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
        const { device } = this.props;

        this.state = {
            matches: undefined
        };

        const devicesToRenderAt: Device[] = device ? [device] : [...allDevices];

        for (const deviceToRenderAt of devicesToRenderAt) {
            this.triggerAtMediaQueries[deviceToRenderAt] = window.matchMedia(
                this.allMediaQueries[deviceToRenderAt]
            );
        }
    }

    componentDidMount(): void {
        const { device } = this.props;
        const devicesToRenderAt: Device[] = device ? [device] : [...allDevices];

        for (const deviceToRenderAt of devicesToRenderAt) {
            this.triggerAtMediaQueries[deviceToRenderAt] = window.matchMedia(
                this.allMediaQueries[deviceToRenderAt]
            );
            this.triggerAtMediaQueries[deviceToRenderAt].addListener(
                this.updateMatches.bind(this)
            );
            this.updateMatches();
        }
    }

    componentWillUnmount(): void {
        for (const device of Object.keys(this.triggerAtMediaQueries)) {
            this.triggerAtMediaQueries[device].removeListener(
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
