import { TextField } from '@mui/material';
import { memo } from 'react';

export default  memo(function InputText({
  valuesValidation,
  setValuesValidation,
}: object | any) {
  const { valid } = valuesValidation.login;
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Email"
        error={valid === "" ? false : !valid}
        variant="outlined"
        sx={{ width: "50%" }}
        helperText={!valid && valid !== "" ? "email is not valid" : ""}
        onKeyUp={(e:any) => {
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
)