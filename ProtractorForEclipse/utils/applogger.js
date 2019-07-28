var log4js = require('log4js');

log4js.configure({
  appenders: {
    protractorLogs: {
      type: 'file',
      filename: './log/app.log'
    },
    console: {
      type: 'console'
    }
  },
  categories: {
    protractor: {
      appenders: ['protractorLogs'],
      level: 'info'
    },
    another: {
      appenders: ['console'],
      level: 'info'
    },
    default: {
      appenders: ['console', 'protractorLogs'],
      level: 'info'
    }
  }
});

module.exports = {
  log: function (text) {
    var logger = log4js.getLogger('protractor');
    logger.info(text);
  }
}