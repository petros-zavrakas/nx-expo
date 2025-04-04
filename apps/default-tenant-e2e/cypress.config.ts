import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run default-tenant:serve',
        production: 'npx nx run default-tenant:serve',
      },
      ciWebServerCommand: 'npx nx run default-tenant:serve',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:8081',
  },
});
