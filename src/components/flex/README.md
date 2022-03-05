The Flex component creates flexbox layouts.

```jsx harmony
import { ThemeProvider, Box, Text, Flex } from '@lapidist/components';

<ThemeProvider>
    <Flex>
        <Box
            styles={{
                flex: '1 1 auto'
            }}
        >
            <Text
                styles={{
                    padding: 4, 
                    backgroundColor: { group: 'primary', shade: 'base' },
                    textColor: { group: 'base', shade: 'light' }
                }}
            >
                Hello world!
            </Text>
        </Box>
        <Box>
            <Text
                styles={{
                    padding: 4,
                    backgroundColor: { group: 'primary', shade: 'light' },
                    textColor: { group: 'base', shade: 'light' }
                }}
            >
                Hello world!
            </Text>
        </Box>
    </Flex>
</ThemeProvider>
```
