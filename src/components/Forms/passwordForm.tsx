import { useRef } from "react";

export function InputPassword({
  valuesValidation,
  setValuesValidation,
}: object | any) {
  const refInput: any = useRef();
  return (
    <div style={{ position: "relative" }}>
      <input type="Password" onKeyUp={(e) => {}} ref={refInput} />
      <span
        style={{ position: "absolute" }}
        onClick={() => {
          switch (refInput.current.type) {
            case "text":
              refInput.current.type = "password";
              break;
            case "password":
              refInput.current.type = "text";
              break;
          }
        }}
      >
        &#128065;
      </span>
    </div>
  );
}
