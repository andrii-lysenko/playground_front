import { createRoot } from 'react-dom/client';

import { App } from './app/app';
import './styles/global.css';
import { createi18n } from './i18n';
import { AllProviders } from './app/providers';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

// Initialize the msw worker, wait for the service worker registration to resolve, then mount
async function render() {
    root.render(
        <AllProviders>
            <App />
        </AllProviders>,
    );
}
createi18n('en');
render();
