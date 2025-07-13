const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getVehicle() {
  try {
    const response = await fetch(`${API_BASE_URL}/vehicle/`);
    if (!response.ok) {
      throw new Error(`Erro ${response.status}: ${response.statusText}`);
    }

    const vehicle = await response.json();
    return vehicle;
  } catch (error) {
    console.error('Erro ao buscar veículo:', error);
    throw error;
  }
}

export async function saveContact(data) {
  try {
    if (!data.name || !data.phone || !data.email || !data.message) {
      throw new Error("Dados incompletos. Todos os campos são obrigatórios.");
    }

    const formattedData = {
      contact_message: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message
      }
    };

    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Erro ao salvar contato", error);
    throw error;
  }
}
