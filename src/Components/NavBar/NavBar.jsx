import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConnect/AcoesDaConnect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";
import Logo from "../../assets/logo.png";
import styles from "./NavBar.module.scss";

function NavBar() {

  return (
  
  <BrowserRouter>
      <nav className={styles.navBar}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

  
        <ul>
          <li>
            <Link to="/"> Início </Link>
          </li>
          <li>
            <Link to="/acoes"> Ações da Connect</Link>
          </li>
          <li>
            <Link to="/quemSomos"> Quem Somos </Link>
          </li>
        </ul>
        <Link to="/perfil">
          <img className={styles.imgPerfil} src="src/assets/foto.jpg"alt="src/assets/foto.jpg" />
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}
export default NavBar;