import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Highlight from "../../components/highlight/Highlight";
import { getVehicle } from "../../service/vehicleService";
import VeicleDetails from "../../components/details/VehicleDetails";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loading from "../../components/Loading/Loading";

function Home() {
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
      <Highlight />
      <Gallery images={vehicle.images} />
      <VeicleDetails vehicle={vehicle} />
      <ContactForm />
    </main>
  );
}

export default Home;
