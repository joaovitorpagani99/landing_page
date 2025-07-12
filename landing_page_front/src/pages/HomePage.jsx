import { useEffect, useState } from "react";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/header/Header";
import Highlight from "../components/highlight/Highlight";
import { getVehicle } from "../service/vehicleService";
import VeicleDetails from "../components/details/VehicleDetails";

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

  if (loading) return <p>Carregando ...</p>;
  return (
    <main>
      <Header />
      <Highlight />
      <Gallery images={vehicle.images} />
      <VeicleDetails vehicle={vehicle} />
    </main>
  )
}

export default Home;
