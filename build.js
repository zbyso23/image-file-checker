const esbuild = require('esbuild');

const options = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'browser',
  outfile: 'dist/bundle.js',
  minify: true,
  sourcemap: true,
  globalName: 'ImageFileChecker',
};

esbuild
  .build(options)
  // .then(() => {
  //   esbuild
  //     .serve(
  //       {
  //         servedir: 'dist',
  //         port: 3000,
  //       },
  //       options
  //     )
  //     .then((server) => {
  //       console.log(`Server is running on http://localhost:${server.port}`);
  //     });
  // })
  .catch(() => process.exit(1));
