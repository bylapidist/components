The Panel component provides a themed wrapper for other UI elements.

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
