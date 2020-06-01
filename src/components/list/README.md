The List component is a layout primitive for ordered or unorded lists. The default list is unordered.

```jsx harmony
import { ThemeProvider, List } from '@lapidist/components';

<ThemeProvider>
    <List
        items={[
            { item: 'hello', key: 'test1' },
            { item: 'world', key: 'test2' }
        ]}
    />
</ThemeProvider>
```

```jsx harmony
import { ThemeProvider, List } from '@lapidist/components';

<ThemeProvider>
    <List
        type="ol"
        items={[
            { item: 'hello', key: 'test1' },
            { item: 'world', key: 'test2' }
        ]}
    />
</ThemeProvider>
```
