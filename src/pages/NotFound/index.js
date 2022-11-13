import "./notfound.css";

import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";

export default function NotFound() {
  return (
    <div className="not-found">
      <Logo />
      <h1>Página não encontrada!</h1>
      <p>Esta página que está procurando não existe.</p>

      <Link className="link" to="/">
        Voltar para a home
      </Link>
    </div>
  );
}
