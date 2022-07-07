import { useSelector } from "react-redux";
import { ReduxState } from "types/store";
import { Link } from 'react-router-dom';

export function Navbar() {
  const { accesUser } = useSelector((data: ReduxState) => data.pokemon);
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          style={{ height: "4rem", marginLeft: "2rem" }}
          src="https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg"
          alt=""
        />
        <div style={{ width: "20%" }}>
          {accesUser.user.length === 0 && accesUser.password.length === 0 ? (
            <h4>
              No has ingresado todavia <Link to={"/login"}>Ingresar</Link>
            </h4>
          ) : (
            <div>{accesUser.name}</div>
          )}
        </div>
      </nav>
      <hr />
    </>
  );
}
