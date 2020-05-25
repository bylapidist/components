The default Container is horizontally centered, with a configurable max-width and padding.

```jsx harmony
import { Paragraph } from '../index';

<div style={{ background: 'black', padding: '20px' }}>
    <Container maxWidth="500px" padding="20px" style={{ background: 'white' }}>
        <Paragraph>
            Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sollicitudin sed turpis et vulputate. Nam consequat porttitor scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean egestas enim mi, nec tincidunt libero gravida et.
        </Paragraph>
    </Container>
</div>
```

Without specifying these the Container is fluid full-width with zero padding. 

```jsx harmony
import { Paragraph } from '../index';

<Container>
    <Paragraph>
        Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sollicitudin sed turpis et vulputate. Nam consequat porttitor scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean egestas enim mi, nec tincidunt libero gravida et.
    </Paragraph>
</Container>
```
