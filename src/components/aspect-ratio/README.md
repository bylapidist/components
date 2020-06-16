The AspectRatio component maintains a fluid-width aspect ratio for a UI element.

```jsx harmony
import { ThemeProvider, AspectRatio, Text } from '@lapidist/components';

<ThemeProvider>
        <AspectRatio
            ratio={'1/1'}
            styles={{
                borderWidth: 'px',
                borderColor: { group: 'grey', shade: 'lightest' },
                width: 'full',
                marginX: 'auto',
                breakpoints: {
                    md: {
                        width: '1/2'
                    }
                },
                pseudo: {
                    ':hover': {
                        borderColor: { group: 'grey', shade: 'light' },
                        cursor: 'pointer'
                    }
                }
            }}
        >
            <Text styles={{ padding: 4, lineHeight: 'loose' }}>
                Nunc porttitor lectus ex, eu pharetra elit placerat non.
                Suspendisse nec ultrices augue, et varius velit. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Morbi sollicitudin sed turpis et
                vulputate. Nam consequat porttitor scelerisque. Nulla
                ultricies enim at eros accumsan interdum. Aenean egestas
                enim mi, nec tincidunt libero gravida et.
            </Text>
        </AspectRatio>
    </ThemeProvider>
```

You can also use object notation to specify the aspect ratio of the element. It also works well to constrain images.

```jsx harmony
import { ThemeProvider, AspectRatio, Image } from '@lapidist/components';

<ThemeProvider>
    <AspectRatio ratio={{ x: 16, y: 9 }}>
        <Image src="cat.jpg" alt="A pretty cat" />
    </AspectRatio>
</ThemeProvider>
```
