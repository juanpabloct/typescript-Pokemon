import { Button } from "@mui/material";
import { useState } from "react";
import { InputText } from "../components/Forms/InputText";
import { InputPassword } from "../components/Forms/passwordForm";

export function Login() {
  const [valuesValidation, setValuesValidation] = useState({
    login: { user: "", valid: "" },
    password: { password: "" },
  });
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
        <Button>Ingresar</Button>
      </form>
    </div>
  );
}
