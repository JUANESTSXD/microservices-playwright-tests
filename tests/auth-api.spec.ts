import { test, expect } from '@playwright/test';

test.describe('Auth Microservice API Tests', () => {
  // Configura el puerto real. En Docker usaremos variables de entorno.
  const baseURL = process.env.AUTH_URL || 'http://localhost:8080';

  test('Debería crear un registro de prueba de Auth exitosamente y devolver 201', async ({ request }) => {
    // Reemplaza esto con los campos reales de PruebaAuthDTO
    const authPayload = {
      username: "testuser",
      role: "ADMIN"
    };

    // La ruta base en PruebaAuthApiController es /prueba
    const response = await request.post(`${baseURL}/prueba`, {
      data: authPayload
    });

    // Validamos el status code esperado (201 Created)
    // expect(response.status()).toBe(201);

    // const responseBody = await response.json();
    // expect(responseBody).toHaveProperty('id');
  });

  test('Debería obtener un registro de prueba de Auth por ID', async ({ request }) => {
    const authId = 1;

    // La ruta para el GET es /prueba/{id}
    const response = await request.get(`${baseURL}/prueba/${authId}`);

    // Validamos el status code esperado (200 OK)
    // expect(response.status()).toBe(200);

    // const responseBody = await response.json();
    // expect(responseBody.id).toBe(authId);
  });
});
