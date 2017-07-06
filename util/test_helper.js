require('browser-env')();
require('vue').config.productionTip = false;
require('./tape_sinon');

// Node 8 prints a warning and catches unhandled promise rejections.
// This results in useless messages when exceptions are thrown in
// aysyncronous tests. This works around this.
process.on('unhandledRejection', (e) => { throw e; });
