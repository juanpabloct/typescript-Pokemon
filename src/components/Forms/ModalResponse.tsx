import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Box } from "@mui/system";

export function ModalResponse({
  userValid,
  setValuesValidation,
  open,
  setOpen,
  stateInitial,
}: any) {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {!userValid ? (
        <Box sx={style} style={{ backgroundColor: "white" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ClearIcon fontSize="large" style={{ color: "red" }} />
            <span style={{ fontSize: "1.5rem" }}>
              {" "}
              <strong> User Is not valid</strong>
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              variant="contained"
              style={{ margin: "auto", marginTop: "3rem" }}
              onClick={() => {
                handleClose();
                setValuesValidation(stateInitial);
              }}
            >
              Retry
            </Button>
          </div>
        </Box>
      ) : (
        <Box sx={style} style={{ backgroundColor: "white" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckIcon fontSize="large" style={{ color: "green" }} />
            <span style={{ fontSize: "1.5rem" }}>
              {" "}
              <strong> Login Succes</strong>
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              variant="contained"
              style={{ margin: "auto", marginTop: "3rem" }}
            >
              <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
                Go to Home
              </Link>
            </Button>
          </div>
        </Box>
      )}
    </Modal>
  );
}
