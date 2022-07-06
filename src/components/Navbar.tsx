import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReduxState } from "types/store";

export function Navbar() {
  const { loginUser } = useSelector((data: ReduxState) => data.pokemon);
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          style={{ height: "4rem", marginLeft: "2rem" }}
          src="https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg"
          alt=""
        />
        <div style={{ width: "20%" }}>
          {loginUser.user.length === 0 && loginUser.password.length === 0 && (
            <h4>
              No has ingresado todavia <Link to={"/login"}>Ingresar</Link>
            </h4>
          )}
        </div>
      </nav>
      <hr />
    </>
  );
}
