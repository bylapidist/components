The ButtonGroup component groups Button components.

```jsx harmony
import { ThemeProvider, Button, ButtonGroup } from '@lapidist/components';

<ThemeProvider>
    <ButtonGroup>
        <Button type="button" kind="primary" small ghost>Button 1</Button>
        <Button type="button" kind="primary" small>Button 2</Button>
        <Button type="button" kind="primary" small>Button 3</Button>
    </ButtonGroup>
</ThemeProvider>
```

It works with varying Button kinds.

```jsx harmony
import { ThemeProvider, Button, ButtonGroup } from '@lapidist/components';

<ThemeProvider>
    <ButtonGroup>
        <Button type="button" kind="danger" small>Button 1</Button>
        <Button type="button" kind="grey" small ghost>Button 2</Button>
        <Button type="button" kind="primary" small>Button 3</Button>
    </ButtonGroup>
</ThemeProvider>
```

It works with varying Button sizes.

```jsx harmony
import { ThemeProvider, Button, ButtonGroup } from '@lapidist/components';

<ThemeProvider>
    <ButtonGroup>
        <Button type="button" kind="tertiary">Button 1</Button>
        <Button type="button" kind="danger" small ghost>Button 2</Button>
    </ButtonGroup>
</ThemeProvider>
```
