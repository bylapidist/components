The Button component provides an API to a consistent button.

```jsx harmony
import { ThemeProvider, Button } from '@lapidist/components';

<ThemeProvider>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button type="button" kind="primary">Primary</Button>
        <Button type="button" kind="secondary">Secondary</Button>
        <Button type="button" kind="tertiary">Tertiary</Button>
        <Button type="button" kind="danger">Danger</Button>
        <Button type="button" kind="grey">Grey</Button>
    </div>
</ThemeProvider>
```

Disabled buttons 

```jsx harmony
import { ThemeProvider, Button } from '@lapidist/components';

<ThemeProvider>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button type="button" kind="primary" disabled>Primary</Button>
        <Button type="button" kind="secondary" disabled>Secondary</Button>
        <Button type="button" kind="tertiary" disabled>Tertiary</Button>
        <Button type="button" kind="danger" disabled>Danger</Button>
        <Button type="button" kind="grey" disabled>Grey</Button>
    </div>
</ThemeProvider>
```

Small buttons
```jsx harmony
import { ThemeProvider, Button } from '@lapidist/components';

<ThemeProvider>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button type="button" kind="primary" small>Primary</Button>
        <Button type="button" kind="secondary" small>Secondary</Button>
        <Button type="button" kind="tertiary" small>Tertiary</Button>
        <Button type="button" kind="danger" small>Danger</Button>
        <Button type="button" kind="grey" small>Grey</Button>
    </div>
</ThemeProvider>
```

Ghost buttons
```jsx harmony
import { ThemeProvider, Button } from '@lapidist/components';

<ThemeProvider>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button type="button" kind="primary" ghost>Primary</Button>
        <Button type="button" kind="secondary" ghost>Secondary</Button>
        <Button type="button" kind="tertiary" ghost>Tertiary</Button>
        <Button type="button" kind="danger" ghost>Danger</Button>
        <Button type="button" kind="grey" ghost>Grey</Button>
    </div>
</ThemeProvider>
```

Disabled ghost buttons
```jsx harmony
import { ThemeProvider, Button } from '@lapidist/components';

<ThemeProvider>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button type="button" kind="primary" ghost disabled>Primary</Button>
        <Button type="button" kind="secondary" ghost disabled>Secondary</Button>
        <Button type="button" kind="tertiary" ghost disabled>Tertiary</Button>
        <Button type="button" kind="danger" ghost disabled>Danger</Button>
        <Button type="button" kind="grey" ghost disabled>Grey</Button>
    </div>
</ThemeProvider>
```

Small ghost buttons
```jsx harmony
import { ThemeProvider, Button } from '@lapidist/components';

<ThemeProvider>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button type="button" kind="primary" ghost small>Primary</Button>
        <Button type="button" kind="secondary" ghost small>Secondary</Button>
        <Button type="button" kind="tertiary" ghost small>Tertiary</Button>
        <Button type="button" kind="danger" ghost small>Danger</Button>
        <Button type="button" kind="grey" ghost small>Grey</Button>
    </div>
</ThemeProvider>
```
