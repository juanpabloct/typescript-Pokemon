import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel, 
  OutlinedInput
} from "@mui/material";
import { useRef, useState } from "react";
import { VisibilityOff, Visibility } from '@mui/icons-material';
export function InputPassword({
  valuesValidation,
  setValuesValidation,
}: object | any) {
  const refInput: any = useRef();
  const [show, setShow] = useState(false);
  const { password } = valuesValidation.password;

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={!show ? "text" : "password"}
        value={password}
        onChange={(e:any) => {
          setValuesValidation((currem: any) => {
            const copyData = { ...currem };
            copyData.password.password = e.target.value;
            return copyData;
          });
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShow(!show)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
