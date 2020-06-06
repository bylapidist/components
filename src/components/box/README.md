The Box component is a layout primitive to add margin, padding and colors to content.

```jsx harmony
import { ThemeProvider, Box, Text } from '@lapidist/components';

<ThemeProvider>
    <Box
        padding={4}
        backgroundColor={{ colorGroup: 'primary', colorShade: 'base' }}
    >
        <Text textColor={{ colorGroup: 'base', colorShade: 'white' }}>Hello world!</Text>
    </Box>
</ThemeProvider>
```
