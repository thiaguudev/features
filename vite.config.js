// import babel from '@rollup/plugin-babel';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

/** @type {import('vite').UserConfig} */
export default {
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        plugins: [
          getBabelOutputPlugin({
            allowAllFormats: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: '> 0.25%, not dead, IE 11',
                  useBuiltIns: false,
                  modules: false,
                },
              ],
            ],
          }),
        ],
      },
    },
  },
};
