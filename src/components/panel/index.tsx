import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import {
    faCircleCheck,
    faCircleExclamation,
    faCircleInfo,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    ElevatedProps,
    StyledElevated,
    StyledElevatedProps
} from '../elevated';
import { Tag, TagProps } from '../tag';
import { Heading, HeadingProps } from '../heading';
import { Button, ButtonProps } from '../button';
import { ImageProps } from '../image';
import { Spinner, StyledSpinner } from '../spinner';
import { Box } from '../box';
import { Text } from '../text';
import { BaseProps, Theme } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type PanelStatusType = 'none' | 'info' | 'warning' | 'error' | 'success';

export interface PanelProps extends React.HTMLProps<HTMLDivElement> {
    readonly loading?: boolean;
    readonly dismissable?: boolean;
    readonly onDismiss?: () => void;
    readonly status?: PanelStatusType;
    readonly heading?: {
        readonly title: string;
        readonly props?: HeadingProps;
    };
    readonly tag?: {
        readonly title: string;
        readonly props?: TagProps;
    };
    readonly buttons?: {
        readonly title: string;
        readonly props?: ButtonProps;
    }[];
    readonly image?: ImageProps;
}

export type StyledPanelProps = BaseProps &
    ElevatedProps &
    PanelProps &
    ThemeProps<Theme>;

export const StyledPanel = styled(StyledElevated)<
    StyledPanelProps & StyledElevatedProps
>`
    ${({ theme }) => `
        min-height: auto;
        border-style: solid;
        border-color: ${theme.colors.base.transparent};
        border-width: ${theme.borderWidths['1']};
        border-radius: ${theme.borderRadii['2']};
        color: ${theme.colors.grey.dark};
        background-color: ${theme.colors.base.light};
    `}
`;

const Loading = styled.div<StyledPanelProps>`
    ${({ theme }) => `
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: ${theme.sizes['32']};

        ${StyledSpinner} {
            width: ${theme.sizes['16']};
        }
    `}
`;

const Actions = styled.div<StyledPanelProps>`
    ${({ theme }) => `
        display: flex;
        align-items: flex-end;
        border-top: ${theme.sizes['1']} solid ${theme.colors.grey.lightest};
        margin-top: ${theme.sizes['3']};
        padding-top: ${theme.sizes['3']};
    `}
`;

const ButtonGroup = styled.div<StyledPanelProps>`
    ${({ theme }) => `
        display: flex;
        justify-content: end;
        grid-gap: ${theme.sizes['2']};
        width: ${theme.widths['full']};
    `}
`;

export const Panel = (props: BaseProps & ElevatedProps & PanelProps) => {
    const [dismissed, setDismissed] = React.useState(false);
    const hasStatus = props.status && props.status !== 'none';
    const hasTag = props.tag?.title;
    const getIcon = (variant?: PanelStatusType): IconProp => {
        switch (variant) {
            case 'warning':
            case 'error':
                return faCircleExclamation;
            case 'success':
                return faCircleCheck;
            case 'info':
                return faCircleInfo;
            case 'none':
            default:
                return faComment;
        }
    };

    const handleDismiss = () => {
        setDismissed(!dismissed);
        props.onDismiss && props.onDismiss();
    };

    if (dismissed) return null;

    return (
        <StyledPanel
            {...props}
            data-testid={props.testId}
            as={props.as || 'div'}
            elevation={props.elevation || 1}
        >
            <Box gutter={3}>
                {props.loading && (
                    <Loading {...props}>
                        <Spinner />
                    </Loading>
                )}
                {!props.loading && (
                    <Box>
                        {props.heading && (
                            <Heading {...props.heading.props}>
                                {props.heading.title}
                            </Heading>
                        )}
                        <Text>{props.children}</Text>
                    </Box>
                )}
                {!props.loading &&
                    (hasTag || hasStatus || props.buttons?.length) && (
                        <Actions {...props}>
                            {(hasTag || hasStatus) && (
                                <Box>
                                    {hasStatus && (
                                        <Text>
                                            <FontAwesomeIcon
                                                icon={getIcon(props.status)}
                                            />
                                        </Text>
                                    )}
                                    {hasTag && (
                                        <Tag
                                            kind="primary"
                                            {...props.tag.props}
                                        >
                                            {props.tag.title}
                                        </Tag>
                                    )}
                                </Box>
                            )}
                            {props.buttons?.length && (
                                <ButtonGroup {...props}>
                                    {props.buttons.map((button) => (
                                        <Button
                                            kind="primary"
                                            variant="medium"
                                            key={button.title}
                                            {...button.props}
                                        >
                                            {button.title}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            )}
                        </Actions>
                    )}
            </Box>
        </StyledPanel>
    );
};

Panel.displayName = 'Panel';

// import * as React from 'react';
// import { withTheme } from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClose } from '@fortawesome/free-solid-svg-icons';
// import { Elevated, ElevationHeight } from '../elevated';
// import { BoxProps } from '../box';
// import { Spinner } from '../spinner';
// import { HeadingProps } from '../heading';
// import { TagProps } from '../tag';
// import { Button, ButtonProps } from '../button';
// // import { panelSpinnerStyles, panelCloseButtonStyles } from './styles';
// import { BaseProps, Theme } from '../types';
// import { PanelActions } from './components/panel-actions';
// import { PanelBody } from './components/panel-body';
// import { ImageProps } from '../image';
//
// // export * from './styles';
//
// export type PanelPropType = BaseProps & BoxProps;
//
// export type PanelStatusType = 'none' | 'info' | 'warning' | 'error' | 'success';
//
// export type PanelHeadingProp = {
//     readonly title: string;
//     readonly props?: BaseProps & HeadingProps;
// };
//
// export type PanelTagProp = {
//     readonly title: string;
//     readonly props?: BaseProps & TagProps;
// };
//
// export type PanelButtonProp = {
//     readonly title: string;
//     readonly props?: BaseProps & ButtonProps;
// };
//
// export interface PanelProps {
//     readonly loading?: boolean;
//     readonly dismissable?: boolean;
//     readonly onDismiss?: () => void;
//     readonly status?: PanelStatusType;
//     readonly heading?: PanelHeadingProp;
//     readonly elevation?: ElevationHeight;
//     readonly tag?: PanelTagProp;
//     readonly buttons?: PanelButtonProp[];
//     readonly image?: ImageProps;
//     readonly theme: Theme;
// }
//
// const BasePanel: React.FC<PanelPropType & PanelProps> = ({
//     loading,
//     dismissable,
//     onDismiss,
//     status,
//     heading,
//     elevation = 1,
//     tag,
//     buttons,
//     image,
//     children
// }) => {
//     const [dismissed, setDismissed] = React.useState(false);
//
//     const handleDismiss = () => {
//         setDismissed(!dismissed);
//         onDismiss && onDismiss();
//     };
//
//     if (dismissed) return null;
//
//     return (
//         <Elevated
//             elevation={elevation}
//             // styles={mergeStyles(panelStyles({ status, ...restProps }), {
//             //     ...panelLoadingStyles({ loading, ...restProps }),
//             //     ...styles
//             // })}
//             // {...restProps}
//         >
//             {loading ? (
//                 <Spinner
//                 // styles={panelSpinnerStyles()}
//                 />
//             ) : (
//                 <>
//                     <PanelBody heading={heading} image={image}>
//                         {children}
//                     </PanelBody>
//                     <PanelActions tag={tag} buttons={buttons} status={status} />
//                 </>
//             )}
//             {dismissable && (
//                 <Button
//                     // styles={panelCloseButtonStyles()}
//                     kind="tertiary"
//                     variant="medium"
//                     onClick={handleDismiss}
//                 >
//                     <FontAwesomeIcon icon={faClose} />
//                 </Button>
//             )}
//         </Elevated>
//     );
// };
//
// export const Panel = withTheme(BasePanel);
//
// Panel.displayName = 'Panel';
