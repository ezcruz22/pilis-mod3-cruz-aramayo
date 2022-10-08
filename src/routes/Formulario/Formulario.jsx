import { React } from "react";
import { useForm } from "react-hook-form";
import { getWeather } from "../../service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CardsContext } from "../../contexts/CardsContext";
import { useContext } from "react";

const Formulario = () => {
  const SERVER_DOMAIN =
    "https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=";

  const { cards, setCards } = useContext(CardsContext);
  const [nombre, setNombre] = useState("");
  const [latitud, setLat] = useState("");
  const [longitud, setLon] = useState("");
  const [temp, setTemp] = useState("");
  const [isOK, setIsOK] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (submit) => {
    getWeather(
      SERVER_DOMAIN +
        submit.latitud +
        `&longitude=` +
        submit.longitud +
        `&timezone=America/Argentina/Jujuy`
    )
      .then((data) => console.log(data))
      .then((data) => setNombre(submit.nombre))
      .then((data) => setLat(data.latitude))
      .then((data) => setLon(data.longitude))
      .then((data) => setTemp(data.current_weather.temperature))
      .then((data) => setIsOK(true))
      .catch((err) => console.log(err));

    if (isOK === true) {
      console.log(temp);
    }
  };

  return (
    <>
      <h1>Crear Nueva Ubicación</h1>
      <form afterSubmit={() => navigate("/")} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="titulo">Nombre</label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            className="form-control"
            placeholder="Ingrese nombre"
            aria-invalid={errors.nombre ? "true" : "false"}
            {...register("nombre", { required: true })}
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
            className="form-control"
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
            className="form-control"
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
        <button className="btn btn-primary">Crear</button>
      </form>
    </>
  );
};

export default Formulario;
