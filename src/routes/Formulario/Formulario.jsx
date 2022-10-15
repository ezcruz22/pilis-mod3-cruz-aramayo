import { useForm } from "react-hook-form";
import { getWeather } from "../../service";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CardsContext } from "../../contexts/CardsContext";

const Formulario = () => {

  const { cards, setCards } = useContext(CardsContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = (submit) => {

    getWeather(submit.latitud,submit.longitud)
      .then((data)=> createCard(data,submit))
      .then((data)=>console.log(data))
      .catch((err) => console.log(err));
      
  };

  const createCard = (data,submit) => {
    const cardNew = {
      id:cards.length + 1,
      name: submit.ciudad,
      latitude:submit.latitud,
      longitude:submit.longitud,
      temperature:data.current_weather.temperature,
      flag:true
    }
    setCards([...cards, cardNew])
    navigate('/')
  }

  return (
    <>
      <h1>Crear Nueva Ubicación</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="titulo">Nombre</label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            className="input-form"
            placeholder="Ingrese nombre"
            aria-invalid={errors.nombre ? "true" : "false"}
            {...register("ciudad", { required: true })}
          />
          {errors.nombre && (
            <span className="text-danger text-small d-block mb-2" role="alert">
              Este campo es obligatorio.
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="latitud">Latitud</label>

          <input
            id="latitud"
            name="latitud"
            type="number"
            pattern="[0-9]+([.,][0-9]+)?"
            step="any"
            className="input-form"
            placeholder="Ingrese latitud"
            aria-invalid={errors.latitud ? "true" : "false"}
            {...register("latitud", { required: true })}
          />
          {errors.latitud && (
            <span className="text-danger text-small d-block mb-2" role="alert">
              Este campo es obligatorio.
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="longitud">Longitud</label>

          <input
            id="longitud"
            name="longitud"
            type="number"
            pattern="[0-9]+([.,][0-9]+)?"
            step="any"
            className="input-form"
            placeholder="Ingrese longitud"
            aria-invalid={errors.longitud ? "true" : "false"}
            {...register("longitud", { required: true })}
          />
          {errors.longitud && (
            <span className="text-danger text-small d-block mb-2" role="alert">
              Este campo es obligatorio.
            </span>
          )}
        </div>
        <button className="btn btn-form" type="submit">Crear Tarjeta</button>
      </form>
    </>
  );
};

export default Formulario;