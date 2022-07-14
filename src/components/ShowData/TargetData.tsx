import { changeDataPagination } from "actions/actions";
import { ModalPokemon } from "components/ModalPokemon/ModalPokemon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState, TypePokemonData } from "types/store";
import "./StyleTargetData.css";
import { Box } from "@mui/system";
import { Grid, Pagination } from "@mui/material";
import { typesPokemonWithImg } from "Variables";
export function TargetData({ openModal, setOpenModal }: any) {
  const dispatch = useDispatch();
  const { page } = useSelector((data: ReduxState) => data.pokemon);
  const valores = useSelector(
    (data: ReduxState) => data.pokemon.showDataPagination
  );

  const [dataModal, setDataModal] = useState([]);
  const [imgType, setImgType] = useState();
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
          justifyContent={"space-around"}
        >
          {valores?.map((value: TypePokemonData | any, index: number) => {
            const typePokemon = value.types.map((type: any) => {
              const img = typesPokemonWithImg.filter((state) => {
                return state.name === type.type.name;
              });
              return img;
            });
            const onlyTypeArray = typePokemon.flat()[0];

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
                <div
                  style={{
                    backgroundImage: `url(${onlyTypeArray?.img})`,
                    backgroundSize: "100% 100%",
                    height: "8rem",
                    backgroundRepeat:"no-repeat",
                    width: "100%",
                    paddingTop: "0px",
                    backgroundPositionX: "center",
                    position: "absolute",
                    top: "0",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                ></div>
                <div
                  style={{
                    borderRadius: "48%",
                    backgroundColor: "white",
                    width: "60%",
                    height: "70%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5rem",
                    zIndex: "30",
                  }}
                >
                  <img
                    src={value.sprites?.back_default}
                    alt=""
                    style={{
                      width: "100%",
                    }}
                  />
                </div>
                <h2
                  style={{
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    fontFamily: "Inknut Antiqua",
                  }}
                >
                  {value.name}
                </h2>
                <button
                  className="buttonModal"
                  onClick={() => {
                    setImgType(onlyTypeArray);
                    setOpenModal((currem: boolean) => !currem);
                    setDataModal(value);
                  }}
                  style={{ fontFamily: "Inknut Antiqua", fontSize: "1rem", backgroundColor:onlyTypeArray?.backgroundButton}}
                >
                  Show More
                </button>
              </Grid>
            );
          })}
        </Grid>
      )}
     {!openModal&& <Pagination
        disabled={openModal}
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        count={page.limit}
        color="primary"
        onChange={(e: any) => {
          dispatch(changeDataPagination({ page: +e.target.outerText }));
        }}
      />}
    </Box>
  );
}
