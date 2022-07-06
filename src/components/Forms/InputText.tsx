import { TextField } from "@mui/material";

export function InputText({
  valuesValidation,
  setValuesValidation,
}: object | any) {
  const { valid } = valuesValidation.login;
  console.log(valid);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        error={valid === "" ? false : !valid}
        variant="outlined"
        sx={{ width: "50%" }}
        helperText={!valid && valid !== "" ? "email is not valid" : ""}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            const { value }: any = e.target;
            setValuesValidation((currem: any) => {
              const values = { ...currem };
              values.login.user = value;
              let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
              values.login.valid = regex.test(value);
              return values;
            });
          }
        }}
      />
    </>
  );
}
