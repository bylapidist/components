The Responsive component provides a declarative API for rendering components at specific breakpoints.

```jsx harmony
import { ThemeProvider, Responsive, Text } from '@lapidist/components';

<ThemeProvider>
    <Responsive breakpoint="all">
        <Text>This will render at all breakpoints</Text>
    </Responsive>
    <Responsive breakpoint="sm">
        <Text>This will render at the sm breakpoint or larger</Text>
    </Responsive>
    <Responsive breakpoint="md">
        <Text>This will render at the md breakpoint or larger</Text>
    </Responsive>
    <Responsive breakpoint="lg">
        <Text>This will render at the lg breakpoint or larger</Text>
    </Responsive>
    <Responsive breakpoint="xl">
        <Text>This will render at the xl breakpoint or larger</Text>
    </Responsive>
</ThemeProvider>
```
