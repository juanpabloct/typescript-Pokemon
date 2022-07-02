import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Navbar() {
  const { loginUser } = useSelector((data) => data);
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <img
        style={{ height: "3rem", marginLeft: "2rem" }}
        src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_1280.png"
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
  );
}
