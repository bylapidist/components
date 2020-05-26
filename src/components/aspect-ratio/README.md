The AspectRatio component maintains a fluid-width aspect ratio for a UI element.

```jsx harmony
import { AspectRatio, Paragraph } from '@lapidist/components';

<div style={{ border: '1px solid black', padding: '20px', width: '50%', margin: '0 auto' }}>
    <AspectRatio ratio={'1/1'}>
        <Paragraph>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sollicitudin sed turpis et vulputate. Nam consequat porttitor scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean egestas enim mi, nec tincidunt libero gravida et.
        </Paragraph>
    </AspectRatio>
</div>
```

You can also use object notation to specify the aspect ratio of the element. It also works well to constrain images.

```jsx harmony
import { AspectRatio, Image } from '@lapidist/components';

<AspectRatio ratio={{ x: 16, y: 9 }}>
    <Image src="cat.jpg" alt="A pretty cat" />
</AspectRatio>
```
