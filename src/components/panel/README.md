The Panel component provides a themed wrapper for other UI elements.


### Default Panel
```jsx harmony
import { ThemeProvider, Panel, PanelHeading } from '@lapidist/components';

<ThemeProvider>
    <Panel kind="primary">
        <PanelHeading kind="primary">Primary</PanelHeading>
    </Panel>
    <Panel kind="secondary">
        <PanelHeading kind="secondary">Secondary</PanelHeading>
    </Panel>
    <Panel kind="tertiary">
        <PanelHeading kind="tertiary">Tertiary</PanelHeading>
    </Panel>
    <Panel kind="danger">
        <PanelHeading kind="danger">Danger</PanelHeading>
    </Panel>
    <Panel kind="grey">
        <PanelHeading kind="grey">Grey</PanelHeading>
    </Panel>
    <Panel kind="primary">
        <PanelHeading kind="secondary">Mixed</PanelHeading>
    </Panel>
</ThemeProvider>
```

### Loading Panel
```jsx harmony
import { ThemeProvider, Panel, PanelHeading } from '@lapidist/components';

<ThemeProvider>
    <Panel kind="primary" loading>
        <PanelHeading kind="primary">Primary</PanelHeading>
    </Panel>
    <Panel kind="secondary" loading>
        <PanelHeading kind="secondary">Secondary</PanelHeading>
    </Panel>
    <Panel kind="tertiary" loading>
        <PanelHeading kind="tertiary">Tertiary</PanelHeading>
    </Panel>
    <Panel kind="danger" loading>
        <PanelHeading kind="danger">Danger</PanelHeading>
    </Panel>
    <Panel kind="grey" loading>
        <PanelHeading kind="grey">Grey</PanelHeading>
    </Panel>
    <Panel kind="primary" loading>
        <PanelHeading kind="secondary">Mixed</PanelHeading>
    </Panel>
</ThemeProvider>
```
