import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { changeDataPagination } from "actions/actions";
import { ModalPokemon } from "components/ModalPokemon/ModalPokemon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState, TypePokemonData } from "types/store";
import "./StyleTargetData.css";
export function TargetData() {
  const dispatch = useDispatch();
  const { data } = useSelector((data: ReduxState) => data.pokemon);
  const { page } = useSelector((data: ReduxState) => data.pokemon);
  const valores = useSelector(
    (data: ReduxState) => data.pokemon.showDataPagination
  );
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState([]);

  const pagination = (data.length / 12).toFixed();
  return (
    <Box sx={{ marginTop: "3rem" }}>
      {openModal && (
        <ModalPokemon
          pokemon={dataModal}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
      <Grid
        container
        spacing={3}
        width={"80%"}
        gap={"2rem"}
        margin={"auto"}
        justifyContent={"center"}
      >
        {valores.map((value: TypePokemonData | any, index: number) => {
          return (
            <Grid
              style={{ paddingLeft: "0px" }}
              item
              key={index}
              xs={5}
              md={3}
              sx={{
                backgroundColor: "#ffd924",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%!",
              }}
            >
              <h2 style={{ textTransform: "capitalize" }}>{value.name}</h2>
              <img
                src={value.sprites.back_default}
                alt=""
                style={{ width: "70%" }}
              />
              <button
                className="buttonModal"
                onClick={() => {
                  setOpenModal((currem) => !currem);
                  setDataModal(value);
                }}
              >
                Show More
              </button>
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        disabled={openModal}
        page={page}
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        count={+pagination}
        color="primary"
        onChange={(e: any) => {
          console.log(e);

          dispatch(changeDataPagination({ page: +e.target.outerText }));
        }}
      />
    </Box>
  );
}
