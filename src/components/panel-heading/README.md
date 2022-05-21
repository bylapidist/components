The PanelHeading component provides a Heading style for Panel components.

```jsx harmony
import { ThemeProvider, PanelHeading } from '@lapidist/components';

<ThemeProvider>
    <PanelHeading size={3} kind="primary">Primary</PanelHeading>
    <PanelHeading size={2} kind="secondary">Secondary</PanelHeading>
    <PanelHeading kind="tertiary">Tertiary</PanelHeading>
    <PanelHeading kind="danger">Danger</PanelHeading>
    <PanelHeading kind="grey">Grey</PanelHeading>
    <PanelHeading kind="grey" href="https://google.com" target="_blank" rel="nofollow noopener">Grey</PanelHeading>
</ThemeProvider>
```
