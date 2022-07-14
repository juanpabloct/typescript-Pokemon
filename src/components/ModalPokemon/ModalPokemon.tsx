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
    <div className="container" style={{marginBottom:"30px"}}>
      <div
        className="containerChildren"
        style={{ backgroundColor: imgType.backgroundTarget }}
      >
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
        <div
          style={{
            backgroundImage: `url(${imgType.img})`,
            backgroundSize: "cover",
            height: "14rem",
            width: "100%",
            paddingTop: "0px",
            backgroundPosition: "center",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
        </div>
        <div
          style={{
            marginTop: "1rem",
            width: "50%",
            display: "flex",
            backgroundColor: "white",
            borderRadius: "20px",
            position: "relative",
            top: "-5rem",
          }}
          >
          <img
            src={valuesPokemon.sprites?.back_default}
            alt=""
            style={{
              width: "50%",
              margin: "auto",
            }}
            className="imagePokemon"
            />
        </div>
            <h2 style={{margin:0, textTransform:"capitalize"}}>{valuesPokemon.name}</h2>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <section style={{width:"100%"}}>
              <h3 className="styleText">base Stat :</h3>
              <div style={{ height: "8rem", display:"flex", justifyContent:"space-around"}}>
                {valuesPokemon.stats.map((stat: Stat, index) => {
                  return (
                    <div
                      key={index}
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
