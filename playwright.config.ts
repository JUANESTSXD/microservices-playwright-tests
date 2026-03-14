import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    // Puedes definir una baseURL global aquí si todos tus microservicios pasan
    // por un API Gateway (ej. http://localhost:8080)
    baseURL: 'http://localhost:8080',
    trace: 'on-first-retry',
  },
  
  // No necesitamos navegadores (projects: Chromium, Firefox, Webkit) 
  // ya que solo probaremos APIs (haciendo peticiones HTTP).
});
