import { useEffect, useState } from "react";
import "./hero.scss";

const Hero = () => {
  const url = "https://www.superheroapi.com/api.php";
  const token = "1776884922496332";

  const [nameHero, setnameHero] = useState("Busca tu héroe favorito");
  const [heros, setHeros] = useState([]);

  const getHero = async () => {
    try {
      const data = await fetch(`${url}/${token}/search/${nameHero}`);
      const { results } = await data.json();
      setHeros(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHero();

    // eslint-disable-next-line
  }, []);

  const handleInput = (e) => {
    setnameHero(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameHero !== "") {
      getHero();
    }
    setnameHero("");
  };

  return (
    <div className="hero">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="hero">Ingrese Nombre de Heroe :</label>
        <input
          type="text"
          name="hero"
          id="hero"
          onChange={handleInput}
          value={nameHero}
          autoComplete="off"
        />
        {nameHero === "" && <p></p>}
        <button>Buscar Héroe</button>
      </form>

      <div className="info">
        {heros ? (
          heros.map((hero) => (
            <div key={hero.id} className="card">
              <h2>{hero.name}</h2>
              <img src={hero.image.url} alt="Imagen Heroe" />
              <div className="details">
                <h3>Estado</h3>
                <ul className="items">
                  <li className="item">
                    Nivel de Inteligencia:
                    {hero.powerstats.intelligence === "null"
                      ? "-"
                      : hero.powerstats.intelligence}
                  </li>
                  <li className="item">
                    Fuerza:
                    {hero.powerstats.strength === "null"
                      ? "-"
                      : hero.powerstats.strength}
                  </li>
                  <li className="item">
                    Velocidad:
                    {hero.powerstats.speed === "null"
                      ? "-"
                      : hero.powerstats.speed}
                  </li>
                  <li className="item">
                   Durabilidad:
                    {hero.powerstats.durability === "null"
                      ? "-"
                      : hero.powerstats.durability}
                  </li>
                  <li className="item">
                    Poder:
                    {hero.powerstats.power === "null"
                      ? "-"
                      : hero.powerstats.power}
                  </li>
                  <li className="item">
                    Nivel de Combate:
                    {hero.powerstats.combat === "null"
                      ? "-"
                      : hero.powerstats.combat}
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <h1>BIENVENIDO AL BUSCADOR DE HÉROES </h1>
        )}
      </div>
    </div>
  );
};

export default Hero;
