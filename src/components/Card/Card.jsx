import { useState, useContext} from 'react';
import { FaTrashAlt,FaTrash, FaCloudSun, FaCloudShowersHeavy} from 'react-icons/fa';
import { CardsContext } from '../../contexts/CardsContext';
import './Card.css'

const Card = ({card}) => {
    const {id, name, latitude, longitude,temperature, flag} = card
    const { cards, setCards } = useContext(CardsContext);
    const [isFavorite, setIsFavorite] = useState(flag);

    const handleFavorite = () => {
      setIsFavorite((isFavorite) => !isFavorite);
    
      const foundIndex = cards.findIndex(fav => fav.id === id);
    
      if (foundIndex === -1) {
        setCards([...cards, card])
        return
      }
    
      setCards(
        cards.filter((fav) => fav.id !== id )//!==
      );
    }

    return (
        <div className='card-container'>
          <div className='card'>
            <h4>Tarjeta Nro:{id}</h4>
            <h3>Ciudad: {name}</h3>
            <h3>Latitud: {latitude}</h3>
            <h3>Longitud: {longitude}</h3>
            <h3>Temperatura: {temperature} °C</h3>
            <h2>{temperature > 15 ?<FaCloudSun/> : <FaCloudShowersHeavy/>}</h2>
          </div>
          <div className='card-actions'>
            <div className='fav' onClick={handleFavorite}>
            {isFavorite ? (
              <FaTrashAlt className='delete'/>
            )   : (
              <FaTrash/>
            )}
          </div>
          {/* <Link className='btn-see-more' to={`/card/${id}`}>
            Ver más
          </Link> */}
          </div>
    
        </div>
      );
}
export default Card;