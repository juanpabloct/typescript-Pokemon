import { loginUser } from "actions/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "types/store";
import InputText from "../../components/Forms/InputText";
import { InputPassword } from "../../components/Forms/passwordForm";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ModalResponse } from "components/Forms/ModalResponse";
import "./login.css";
export function Login() {
  interface valuesValidation {
    login: {
      user: string;
      valid: boolean;
    };
    password: {
      password: string;
    };
  }
  const stateInitial: valuesValidation = {
    login: { user: "", valid: false },
    password: { password: "" },
  };

  const [valuesValidation, setValuesValidation] = useState(stateInitial);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state: ReduxState) => state.pokemon);
  const { accesUser } = useSelector((state: ReduxState) => state.pokemon);
  const [userValid, setUserValid] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      {
        ///Section of the modal
      }
      <ModalResponse
        userValid={userValid}
        setValuesValidation={setValuesValidation}
        open={open}
        setOpen={setOpen}
        stateInitial={stateInitial}
      />
      {
        //Section of the login
      }
      <Box sx={{ width: "80%", margin: "auto" }}>
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <img
            src="https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg"
            style={{ maxHeight: "8rem" }}
            alt=""
          />
          <InputText
            valuesValidation={valuesValidation}
            setValuesValidation={setValuesValidation}
          />
          <InputPassword
            valuesValidation={valuesValidation}
            setValuesValidation={setValuesValidation}
          />
          <Button
            disabled={!valuesValidation.login.valid}
            onClick={() => {
              const filter = users.filter((user) => {
                return (
                  user.user === valuesValidation.login.user &&
                  user.password == valuesValidation.password.password
                );
              });
              if (filter.length > 0) {
                dispatch(loginUser(filter[0]));
                setUserValid(true);
              }
              handleOpen();
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </>
  );
}
