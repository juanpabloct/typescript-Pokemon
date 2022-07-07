import { Button } from "@mui/material";
import { loginUser } from "actions/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ValuesValidation } from "types/login/TypeLogin";
import { PokemonState, ReduxState } from "types/store";
import { InputText } from "../components/Forms/InputText";
import { InputPassword } from "../components/Forms/passwordForm";

export function Login() {
  const [valuesValidation, setValuesValidation] = useState({
    login: { user: "", valid: false },
    password: { password: "" },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accesPermission } = useSelector(
    (state: ReduxState) => state.pokemon.loginUser
  );
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
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
            const { login, password } = valuesValidation;
            dispatch(
              loginUser({
                email: login.user,
                password: password.password,
              })
            );
            console.log(accesPermission);
            if (accesPermission) {
              navigate("/");
            }
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
