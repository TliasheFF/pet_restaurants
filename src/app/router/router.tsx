import { createBrowserRouter } from 'react-router';

import { indexRoute } from './routes/index.route';
import { notFountRoute } from './routes/not-found.route';

export const router = createBrowserRouter([indexRoute, notFountRoute]);
