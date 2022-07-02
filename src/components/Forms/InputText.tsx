export function InputText({
  valuesValidation,
  setValuesValidation,
}: object | any) {
  return (
    <input
      type="text"
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
  );
}
