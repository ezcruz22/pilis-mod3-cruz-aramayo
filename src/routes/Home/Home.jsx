import './Home.css'
import Cards from '../../components/Card/Cards'
import { CardsContext } from "../../contexts/CardsContext";
import { useContext } from "react";

const Home = () => {
  const { cards } = useContext(CardsContext);

  return (
    <>
      <div className='main-container'>
        <Cards cards={cards}/>
      </div>
    </>
  );
};

export default Home;