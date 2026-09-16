import { useSearchParams } from 'react-router-dom';
import style from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={style.mapContainer}>
      
    </div>
  )
}

export default Map
