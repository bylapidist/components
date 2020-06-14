The Image component maintains a fluid-width wrapper for an `<img>` tag.

```jsx harmony
import { ThemeProvider, AspectRatio, Image } from '@lapidist/components';

<ThemeProvider>
    <Image src="cat.jpg" alt="A pretty cat" />
    <Image styles={{ width: '1/2' }} src="cat.jpg" alt="A pretty cat" />
</ThemeProvider>
```
