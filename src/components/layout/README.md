The Layout component allows for easy creation of layouts comprised of `header`, `sidebar`, `main` and `footer`. 

```jsx harmony
import { Layout } from '@lapidist/components';

<Layout
    header={
        <div style={{ backgroundColor: 'red' }}>
            <span>Header</span>
        </div>
    }
    sidebar={
        <div style={{ backgroundColor: 'blue' }}>
            <span>Sidebar</span>
        </div>
    }
    main={
        <div style={{ backgroundColor: 'yellow' }}>
            <span>Main</span>
        </div>
    }
    footer={
        <div style={{ backgroundColor: 'green' }}>
            <span>Footer</span>
        </div>
    }
/>
```

All of these sections are optional and can be omitted if desired.

```jsx harmony
import { Layout } from '@lapidist/components';

<Layout
    sidebarWidth="30%"
    sidebar={
        <div style={{ backgroundColor: 'blue' }}>
            <span>Sidebar</span>
        </div>
    }
    main={
        <div style={{ backgroundColor: 'yellow' }}>
            <span>Main</span>
        </div>
    }
/>
```
