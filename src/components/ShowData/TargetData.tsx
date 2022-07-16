import { changeDataPagination } from "actions/actions";
import { ModalPokemon } from "components/ModalPokemon/ModalPokemon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState, TypePokemonData } from "types/store";
import "./StyleTargetData.css";
import { Box } from "@mui/system";
import { Grid, Pagination } from "@mui/material";
import { PokemonWithImage, typesPokemonWithImg } from "Variables";
export function TargetData({ openModal, setOpenModal }: any) {
  const dispatch = useDispatch();
  const { page } = useSelector((data: ReduxState) => data.pokemon);
  const valores = useSelector(
    (data: ReduxState) => data.pokemon.showDataPagination
  );

  const [dataModal, setDataModal] = useState<any>([]);
  const [imgType, setImgType] = useState<PokemonWithImage>();
  const valueImages = typesPokemonWithImg.reduce<
    Record<string, PokemonWithImage>
  >((prev, curr) => {
    prev[curr.name] = curr;
    return prev;
  }, {});
  return (
    <Box sx={{ marginTop: "3rem" }}>
      {openModal && (
        <ModalPokemon
          pokemon={dataModal}
          setOpenModal={setOpenModal}
          openModal={openModal}
          imgType={imgType}
        />
      )}
      {!openModal && (
        <Grid
          container
          spacing={3}
          width={"80%"}
          gap={"2rem"}
          margin={"auto"}
          justifyContent={"space-around "}
        >
          {valores?.map((value: TypePokemonData, index: number) => {
            const typePokemon = value?.types.map((type) => {
              const img = valueImages[type.type.name];
              return img;
            });

            if (typePokemon) {
              const onlyTypeArray = typePokemon?.flat()[0];
              console.log(onlyTypeArray);

              return (
                <Grid
                  style={{
                    paddingLeft: "0px",
                    width: "100%",
                    zIndex: "30",
                    paddingTop: "0px",
                    position: "relative",
                    borderRadius: "8px",
                  }}
                  item
                  key={index}
                  xs={5}
                  md={3}
                  sx={{
                    backgroundColor: onlyTypeArray?.backgroundTarget,
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <figure
                    className="backgroundImage"
                    style={{
                      backgroundImage: `url(${onlyTypeArray?.img})`,
                    }}
                  ></figure>
                  <figure className="containImgMain">
                    <img src={value?.sprites?.back_default} alt="" />
                  </figure>
                  <h2 className="titlePokemon">{value?.name}</h2>
                  <button
                    className="buttonModal"
                    onClick={() => {
                      setImgType(onlyTypeArray);
                      setOpenModal((currem: boolean) => !currem);
                      setDataModal(value);
                    }}
                    style={{ backgroundColor: onlyTypeArray?.backgroundButton }}
                  >
                    Show More
                  </button>
                </Grid>
              );
            }
          })}
        </Grid>
      )}
      {!openModal && (
        <div className="containPagination">
          <Pagination
            disabled={openModal}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
            count={page.limit}
            color="primary"
            onChange={(e: any) => {
              dispatch(changeDataPagination({ page: +e.target.outerText }));
            }}
          />
        </div>
      )}
    </Box>
  );
}
