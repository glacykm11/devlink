import "./home.css";

import { Social } from "../../components/Social";

import { FaFacebook, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Glacy Gomes</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal no Youtube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Grupo privado no Telegram</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal no Youtube</p>
          </a>
        </section>

        <footer>
          <Social url="https://facebook.com/glacy.gomes.7">
            <FaFacebook size={35} color="#FFF" />
          </Social>
          <Social url="https://instagram.com/glacygomes">
            <FaInstagram size={35} color="#FFF" />
          </Social>
          <Social url="https://www.youtube.com/@arianinha-forger">
            <FaYoutube size={35} color="#FFF" />
          </Social>
          <Social url="https://twitch.tv/arianinha1">
            <FaTwitch size={35} color="#FFF" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
