The Box component is a layout primitive to add margin, padding and colors to content.

```jsx harmony
import { ThemeProvider, Box, Text } from '@lapidist/components';

<ThemeProvider>
    <Box
        styles={{
            padding: 4,
            backgroundColor: { group: 'primary', shade: 'base' }
        }}
    >
        <Text styles={{
            textColor: { group: 'base', shade: 'white' }
        }}>
            Hello world!
        </Text>
    </Box>
</ThemeProvider>
```
