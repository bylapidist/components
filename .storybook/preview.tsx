import { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Controls, Stories } from '@storybook/blocks';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            }
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Stories />
                    <Controls />
                </>
            )
        }
    }
}

export default preview;
