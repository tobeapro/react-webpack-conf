const webpack = require('webpack')
const webpackConfigFactory = require('../config/webpack.conf')
const config = webpackConfigFactory('production')
const compiler = webpack(config)
return new Promise((resolve, reject) => {
  compiler.run()
    // compiler.run((err, stats) => {
    //   let messages;
    //   if (err) {
    //     if (!err.message) {
    //       return reject(err);
    //     }
    //     messages = formatWebpackMessages({
    //       errors: [err.message],
    //       warnings: [],
    //     });
    //   } else {
    //     messages = formatWebpackMessages(
    //       stats.toJson({ all: false, warnings: true, errors: true })
    //     );
    //   }
    //   if (messages.errors.length) {
    //     // Only keep the first error. Others are often indicative
    //     // of the same problem, but confuse the reader with noise.
    //     if (messages.errors.length > 1) {
    //       messages.errors.length = 1;
    //     }
    //     return reject(new Error(messages.errors.join('\n\n')));
    //   }
    //   if (
    //     process.env.CI &&
    //     (typeof process.env.CI !== 'string' ||
    //       process.env.CI.toLowerCase() !== 'false') &&
    //     messages.warnings.length
    //   ) {
    //     console.log(
    //       chalk.yellow(
    //         '\nTreating warnings as errors because process.env.CI = true.\n' +
    //           'Most CI servers set it automatically.\n'
    //       )
    //     );
    //     return reject(new Error(messages.warnings.join('\n\n')));
    //   }

    //   const resolveArgs = {
    //     stats,
    //     previousFileSizes,
    //     warnings: messages.warnings,
    //   };
    //   if (writeStatsJson) {
    //     return bfj
    //       .write(paths.appBuild + '/bundle-stats.json', stats.toJson())
    //       .then(() => resolve(resolveArgs))
    //       .catch(error => reject(new Error(error)));
    //   }

    //   return resolve(resolveArgs);
    // });
  });