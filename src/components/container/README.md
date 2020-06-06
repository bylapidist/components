The default Container is horizontally centered, with a configurable max-width.

```jsx harmony
import { ThemeProvider, Container, Text } from '@lapidist/components';

<ThemeProvider>
    <Container maxWidth="1/2" padding={4}>
        <Text>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sollicitudin sed turpis et vulputate. Nam consequat porttitor scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean egestas enim mi, nec tincidunt libero gravida et.
        </Text>
    </Container>
</ThemeProvider>
```

Without specifying these the Container is fluid full-width with zero padding. 

```jsx harmony
import { ThemeProvider, Container, Text } from '@lapidist/components';

<ThemeProvider>
    <Container>
        <Text>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sollicitudin sed turpis et vulputate. Nam consequat porttitor scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean egestas enim mi, nec tincidunt libero gravida et.
        </Text>
    </Container>
</ThemeProvider>
```
