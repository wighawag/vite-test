import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const builtinsPlugin = builtins({crypto: true});
builtinsPlugin.name = 'builtins'; // required, see https://github.com/vitejs/vite/issues/728

const globalsPlugin = globals();
globalsPlugin.name = 'globals'; // required, see https://github.com/vitejs/vite/issues/728

module.exports = {
    rollupInputOptions: {
        plugins: [
            globalsPlugin,
            builtinsPlugin,
        ]
    }
  }