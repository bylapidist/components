The Layout component allows for easy creation of layouts comprised of `header`, `sidebar`, `main` and `footer`. 

```jsx harmony
import { ThemeProvider, Box, Layout, Text } from '@lapidist/components';

<ThemeProvider>
    <Layout
        header={
            <Box backgroundColor={{ colorGroup: 'primary', colorShade: 'dark' }}>
                <Text textAlign="center" textColor={{ colorGroup: 'base', colorShade: 'white' }}>
                    Header
                </Text>
            </Box>
        }
        sidebar={
            <Box backgroundColor={{ colorGroup: 'primary', colorShade: 'light' }}>
                <Text textAlign="center" textColor={{ colorGroup: 'base', colorShade: 'white' }}>
                    Sidebar
                </Text>
            </Box>
        }
        main={
            <Box backgroundColor={{ colorGroup: 'primary', colorShade: 'base' }}>
                <Text textAlign="center" textColor={{ colorGroup: 'base', colorShade: 'white' }}>
                    Main
                </Text>
            </Box>
        }
        footer={
            <Box backgroundColor={{ colorGroup: 'primary', colorShade: 'dark' }}>
                <Text textAlign="center" textColor={{ colorGroup: 'base', colorShade: 'white' }}>
                    Footer
                </Text>
            </Box>
        }
    />
</ThemeProvider>
```

All of these sections are optional and can be omitted if desired.

```jsx harmony
import { ThemeProvider, Box, Layout, Text } from '@lapidist/components';

<ThemeProvider>
    <Layout
        sidebarWidth="1/5"
        sidebar={
            <Box backgroundColor={{ colorGroup: 'primary', colorShade: 'light' }}>
                <Text textAlign="center" textColor={{ colorGroup: 'base', colorShade: 'white' }}>
                    Sidebar
                </Text>
            </Box>
        }
        main={
            <Box backgroundColor={{ colorGroup: 'primary', colorShade: 'base' }}>
                <Text textAlign="center" textColor={{ colorGroup: 'base', colorShade: 'white' }}>
                    Main
                </Text>
            </Box>
        }
    />
</ThemeProvider>
```
