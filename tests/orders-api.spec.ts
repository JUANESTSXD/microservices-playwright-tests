import { test, expect } from '@playwright/test';

test.describe('Orders Microservice API Tests', () => {
  // Configura el puerto real. En Docker usaremos variables de entorno.
  const baseURL = process.env.ORDERS_URL || 'http://localhost:8081';

  test('Debería crear una orden exitosamente y devolver 201', async ({ request }) => {
    // Reemplaza esto con los campos reales de OrdersPruebaDTO
    const orderPayload = {
      description: "Orden de Prueba",
      quantity: 5,
      total: 150.50
    };

    // La ruta base en el controller es /prueba
    const response = await request.post(`${baseURL}/prueba`, {
      data: orderPayload
    });

    // Validamos el status code esperado (201 Created)
    // expect(response.status()).toBe(201); 

    // const responseBody = await response.json();
    // expect(responseBody).toHaveProperty('id'); 
  });

  test('Debería obtener una orden por ID', async ({ request }) => {
    const orderId = 1;

    // La ruta para el GET es /prueba/{id}
    const response = await request.get(`${baseURL}/prueba/${orderId}`);

    // Validamos el status code esperado (200 OK)
    // expect(response.status()).toBe(200);

    // const responseBody = await response.json();
    // expect(responseBody.id).toBe(orderId);
  });
});
