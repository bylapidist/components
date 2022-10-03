import * as React from 'react';
import styled, { ThemeProps } from 'styled-components';
import { Theme } from '@lapidist/styles';
import { BaseProps } from '../shared-types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ImageProps extends React.HTMLProps<HTMLImageElement> {}

export type StyledImageProps = BaseProps & ImageProps & ThemeProps<Theme>;

export const StyledImage = styled.img<StyledImageProps>``;

export const Image = (props: BaseProps & ImageProps) => (
    <StyledImage {...props} data-testid={props.testId} as={props.as || 'img'} />
);

Image.displayName = 'Image';
