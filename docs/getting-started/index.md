### Installation

`@lapidist/components` is available as an [npm package](https://www.npmjs.com/package/@lapidist/components).

```shell
// via npm
npm install @lapidist/components styled-components

// or via yarn
yarn add @lapidist/components styled-components
```

### Usage

```jsx harmony
import { ThemeProvider, Link } from '@lapidist/components';

<ThemeProvider>
    <Link styles={{ fontSize: 5 }} href="/#/Components">
        Component Docs &#8594;
    </Link>
</ThemeProvider>
```

### Philosophy

- Quality over quantity: a small library of well-designed components is preferable to many poor components.
- Constraints are good: consistency takes precedence over configurability.
- Modern: we don't support older browsers.

### License
`@lapidist/components` is licensed under the MIT license. See [LICENSE](https://github.com/bylapidist/components/blob/master/LICENSE) for the full text.
