import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useSelector } from "react-redux";
import { ReduxState } from "types/store";
import { Link } from "react-router-dom";
export function Navbar() {
  const { accesUser } = useSelector((data: ReduxState) => data.pokemon);
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          top: "0",
          zIndex: "60",
          backgroundColor: "#0d6fa7",
        }}
      >
        <img
          style={{ height: "4rem", marginLeft: "2rem" }}
          src="https://s3-alpha-sig.figma.com/img/972c/4a8e/5dcb278b33b867f3b7c3728752f7fdc1?Expires=1658707200&Signature=Qz-K6v9LpAVjNqojFXU~3qJI7NL-gGNHn6E1qyoeQnvnOVB~mg0OIWuidDfVsx3trYUJnUFz5NR~9ynkEepkYrzJJGV2tJbWX9kkkqH4EiN1ct7SyKMuPRoZKDdO-DmTwgX46n2gB~zxyTbAoKoNvTLlRpMF-ZchrCTxuZy1s7VzWpgUz7vu8vDXuruUaX8LUeoG3cPQ9ZI09AsXBytmEEM-~-9lbQUgXCt7tiJdbppeN~PXEEabK3XYpbnHGj4DFiw5jGAkThYuX1Z0tvm-l5eUqXxT~mRciZ0gCZEADqNTdBEHqvapH1sMlcYuOmywqmd~ak3yi17RF93AFGa4Aw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div
          style={{
            width: "40%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {accesUser.user.length === 0 && accesUser.password.length === 0 ? (
            <>
              <h4>No has ingresado todavia</h4>
              <Link to={"/login"}>
                <PersonAddAltIcon style={{ color: "white" }} />
              </Link>
            </>
          ) : (
            <div
              style={{
                width: "80%",
                height: "50%",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-evenly",
                display: "flex",
                borderRadius: "10px",
              }}
            >
              <h5 style={{ marginLeft: "5rem" }}>{accesUser.name}</h5>
              <img
                src="https://s3-alpha-sig.figma.com/img/4078/5adb/76444c5adec9c649d12d4edb2f076848?Expires=1658707200&Signature=JZPZTep75o2ZZMit2ZoboNv2ZDCcXAnM7z75UTp4~3MddstB1erGZAY86S-trY~6BrfuyGl3oNxS3Pp2UNELCtWCrtffEPZ4VKzX9UGHHgULawAHihG4wxpd0hLgr4OpWqkomhemAFIWn4SUwwROunupJrpPP04urVmMknhEXWQQZJvdPJhemJTKx55A4U5LrTtgFuZsI~aa2I1rj0U0ETD~NSBsldsUWKLWTzzyZhW-t5LwVxOAQqMR5kLSTgf-M2Bwb5fURgg6a612Wk-Tu6AeKmhV2HTw-aTyEB~y~NNhJNxCQJNHMOhLDueXLZr-o-amG92-XTuEzTM5xHFWQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
                style={{ height: "2rem" }}
              />
            </div>
          )}
        </div>
      </nav>
      <hr />
    </>
  );
}
