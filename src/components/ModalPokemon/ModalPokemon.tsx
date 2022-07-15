import { Stat, TypePokemonData } from "types/store";
import "./StyleModalPokemon.css";
export function ModalPokemon({
  pokemon,
  setOpenModal,
  openModal,
  imgType,
}: TypePokemonData | any) {
  const valuesPokemon: TypePokemonData = pokemon;
  console.log(pokemon);

  return (
    <div className="container">
      <div
        className="containerModal"
        style={{ backgroundColor: imgType.backgroundTarget }}
      >
        <div className="containButtonExit">
          <span
            className="exit"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </span>
        </div>
        <figure
          className="containFontImage"
          style={{
            backgroundImage: `url(${imgType.img})`,
          }}
        ></figure>
        <div className="containModalImage">
          <img
            src={valuesPokemon.sprites?.back_default}
            alt=""
            className="imagePokemon"
          />
        </div>
        <h2 className="stylePokemon">{valuesPokemon.name}</h2>
        <div className="containInfoPokemon">
          <section style={{ width: "100%" }}>
            <h3 className="styleText">base Stat :</h3>
            <div className="childrenInfoPokemon">
              {valuesPokemon.stats.map((stat: Stat, index) => {
                return (
                  <div key={index} className="children">
                    <h3>{stat.stat.name}:</h3>
                    <p className="styleText">{stat.base_stat}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
