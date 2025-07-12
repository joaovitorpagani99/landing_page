const API_BASE_URL = 'http://localhost:3000/api/v1/landing';

export async function getVehicle() {
  try {
    const response = await fetch(`${API_BASE_URL}/vehicle/`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const vehicle = await response.json();
    console.log(vehicle)
    return vehicle;
  } catch (error) {
    console.error('Erro ao buscar veículo:', error);
    throw error;
  }
}
