import './Card.css'

const Card = ({card}) => {
    const {id, name, latitude, longitude,temperature}=card

    return (
        <div className='card-container'>
          <div className='card'>
            <h2>Tarjeta Nro:{id}</h2>
            <h3>Ciudad:{name}</h3>
            <h3>Latitud:{latitude}</h3>
            <h3>Longitud:{longitude}</h3>
            <h3>Temperatura:{temperature}</h3>
          </div>
    
        </div>
      );
}
export default Card;