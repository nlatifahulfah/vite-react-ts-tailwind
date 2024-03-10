import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { EsLinter, linterPlugin, TypeScriptLinter } from 'vite-plugin-linter'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    svgrPlugin(),
    linterPlugin({
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      linters: [
        new EsLinter({
          configEnv: configEnv,
          serveOptions: { clearCacheOnStart: true }
        }),
        new TypeScriptLinter()
      ]
    })
  ],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      contexts: '/src/contexts',
      features: '/src/features',
      helpers: '/src/helpers',
      hooks: '/src/hooks',
      routes: '/src/routes',
      services: '/src/services',
      types: '/src/types'
    }
  },
  server: { open: true }
}))
