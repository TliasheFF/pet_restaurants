import { createBrowserRouter } from 'react-router';

import { mainRoute } from './routes/main.route';
import { notFountRoute } from './routes/not-found.route';

export const router = createBrowserRouter([mainRoute, notFountRoute]);
