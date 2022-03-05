The Status Panel component provides a status Panel effect for displaying currency or percentages.

```jsx harmony
import { ThemeProvider, StatusPanel } from '@lapidist/components';

<ThemeProvider>
    <StatusPanel kind="primary" heading="House Fund" value={18274.4} />
    <StatusPanel kind="secondary" heading="% Decrease" value={45.21} symbol="%" symbolPrefixed={false} />
</ThemeProvider>
```
