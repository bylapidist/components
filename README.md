<p align="center">
    <a href="https://components.lapidist.net/" target="_blank" rel="noopener">
        <img width="120" src="https://lapidist.net/logo.svg" alt="Lapidist Logo"/>
    </a>
</p>

<h2 align="center">@lapidist/components</h2>

<div align="center">

Opinionated [React](https://reactjs.org/) UI library, built with [styled-components](https://styled-components.com/) and [TypeScript](https://www.typescriptlang.org/).

![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@lapidist/components)
[![npm](https://img.shields.io/npm/v/@lapidist/components)](https://www.npmjs.com/package/@lapidist/components)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/bylapidist/components/dev/react)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/bylapidist/components/dev/typescript)
[![codecov](https://codecov.io/gh/bylapidist/components/branch/master/graph/badge.svg)](https://codecov.io/gh/bylapidist/components)
[![Maintainability](https://api.codeclimate.com/v1/badges/e149e6bee07174eae6ad/maintainability)](https://codeclimate.com/github/bylapidist/components/maintainability)
[![Node](https://img.shields.io/node/v/@lapidist/components)](https://www.npmjs.com/package/@lapidist/components)
[![Dependencies](https://david-dm.org/bylapidist/components/status.svg?style=flat)](https://david-dm.org/bylapidist/components)
[![Dev Dependencies](https://david-dm.org/bylapidist/components/dev-status.svg)](https://david-dm.org/bylapidist/components?type=dev)
[![Peer Dependencies](https://david-dm.org/bylapidist/components/peer-status.svg)](https://david-dm.org/bylapidist/components?type=peer)
[![GitHub Issues](https://img.shields.io/github/issues/bylapidist/components.svg?style=flat)](https://github.com/bylapidist/components/issues)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=bylapidist/components)](https://dependabot.com)
![GitHub](https://img.shields.io/github/license/bylapidist/components)
[![Build Status](https://github.com/bylapidist/components/workflows/Release/badge.svg)](https://github.com/bylapidist/components/actions?query=workflow%3ARelease)
</div>

## Getting Started

`@lapidist/components` is available as an [npm package](https://www.npmjs.com/package/@lapidist/components).

See [https://components.lapidist.net](https://components.lapidist.net) for the full documentation.

### Installation

```shell
// via npm
npm install @lapidist/components styled-components

// or via yarn
yarn add @lapidist/components styled-components
```

### Usage

Ensure you wrap your application with the `<ThemeProvider>` component. 
Here is a quick example to get you started:

```jsx static
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, Button } from '@lapidist/components';

const App = () => (
    <ThemeProvider>
        <Button text="Click me" />
    </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Philosophy

- Quality over quantity: a small library of well-designed components is preferable to many poor components.
- Constraints are good: consistency takes precedence over configurability.
- Modern: we don't support older browsers.

## License
`@lapidist/components` is licensed under the MIT license. See LICENSE for the full text.
