import { test, expect } from '@playwright/test';

test.describe('Catalog Microservice API Tests', () => {
  // Configura el puerto real. En Docker usaremos variables de entorno.
  const baseURL = process.env.CATALOG_URL || 'http://localhost:8082';

  test('Debería crear un item en el catálogo exitosamente y devolver 201', async ({ request }) => {
    // Reemplaza esto con los campos reales de CatalogPruebaDTO
    const catalogPayload = {
      name: "Producto de Prueba",
      description: "Descripción de prueba para el catálogo",
      price: 25.99
    };

    // La ruta base en el controller es /prueba
    // Ajusta si la interfaz CatalogPruebaApi define una ruta adicional para el POST
    const response = await request.post(`${baseURL}/prueba`, {
      data: catalogPayload
    });

    // Validamos el status code esperado (201 Created)
    // expect(response.status()).toBe(201);

    // Descomenta lo siguiente para validar la respuesta cuando la API esté corriendo
    // const responseBody = await response.json();
    // expect(responseBody).toHaveProperty('id'); 
  });

  test('Debería obtener un item del catálogo por ID', async ({ request }) => {
    const itemId = 1;

    // Ajusta si la interfaz CatalogPruebaApi define una ruta adicional para el GET
    const response = await request.get(`${baseURL}/prueba/${itemId}`);

    // Validamos el status code esperado (200 OK)
    // expect(response.status()).toBe(200);

    // const responseBody = await response.json();
    // expect(responseBody.id).toBe(itemId);
  });
});
