import { Stat, TypePokemonData } from "types/store";
import "./StyleModalPokemon.css";
export function ModalPokemon({
  pokemon,
  setOpenModal,
  openModal,
}: TypePokemonData | any) {
  const valuesPokemon: TypePokemonData = pokemon;

  return (
    <div className="container">
      <div className="containerChildren">
        <div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
        >
          <span
            style={{
              position: "absolute",
              alignItems: "rigth",
              fontSize: "1rem",
              marginRight: "1rem",
              marginTop: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </span>
        </div>
        <h2 className="TitlePokemon">{valuesPokemon.name}</h2>
        <img
          src={valuesPokemon.sprites.back_default}
          alt=""
          className="imagePokemon"
        />
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <section>
              <h3>Base Experience:</h3>
              <p className="styleText">{valuesPokemon.base_experience}</p>
            </section>
            <section>
              <div>
                <h3>Held Items</h3>
                {valuesPokemon.held_items.map((value, index) => {
                  return (
                    <div key={index}>
                      <p className="styleText">{value.item.name}</p>
                    </div>
                  );
                })}
              </div>
            </section>
            <section>
              <h3>Types</h3>
              {valuesPokemon.types.map((value, index) => {
                return <p className="styleText">{value.type.name}</p>;
              })}
            </section>
            <section>
              <h3 className="styleText">base Stat :</h3>
              <div style={{ height: "8rem", overflow: "auto" }}>
                {valuesPokemon.stats.map((stat: Stat) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <h3
                        style={{
                          textTransform: "capitalize",
                          display: "inline",
                        }}
                      >
                        {stat.stat.name}:
                      </h3>
                      <p className="styleText">{stat.base_stat}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
