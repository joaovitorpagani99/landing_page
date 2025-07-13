import { useEffect, useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { getVehicle } from "../../service/vehicleService";
import VehicleDetails from "../../components/details/VehicleDetails";
import Loading from "../../components/Loading/Loading";

function ContactPage() {
  const [vehicle, setImagesVeicle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const vehicle = await getVehicle();
        setImagesVeicle(vehicle);
      } catch (error) {
        console.error("Erro ao carregar imagens:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  if (loading) return <Loading />;

  return (
    <main>
      <VehicleDetails vehicle={vehicle} />
      <ContactForm />
    </main>
  );
}

export default ContactPage;
