import { buildRoutes } from '@/lib/vue';

const context = require.context('./', true, /\.vue$/);

export default buildRoutes(context);
