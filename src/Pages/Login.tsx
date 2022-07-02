import { useState } from "react";
import { InputText } from "../components/Forms/InputText";
import { InputPassword } from "../components/Forms/passwordForm";

export function Login() {
  const [valuesValidation, setValuesValidation] = useState({
    login: { user: "", valid: false },
    password: { password: "", valid: "" },
  });
  return (
    <form>
      <InputText
        valuesValidation={valuesValidation}
        setValuesValidation={setValuesValidation}
      />
      <InputPassword
        valuesValidation={valuesValidation}
        setValuesValidation={setValuesValidation}
      />
    </form>
  );
}
