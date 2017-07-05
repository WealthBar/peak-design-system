require('browser-env')();
require('vue').config.productionTip = false;

// Node 8 prints a warning and catches unhandled promise rejections.
process.on('unhandledRejection', (e) => { throw e; });
