import "./Styles/HeaderBar.css"
import ImgLogo from "../assets/logo.jpg"

export default function HeaderBar(){
    return(
        <header className="header-geral">
        <div className="left-side">
            <img src={ImgLogo} alt="" className="logo-img"/>
            <h1 className="title-logo-site">SousaCarmo</h1>
        </div>
        <div className="middle-side"><h2 className="subtitle-upper-bar">Correção Gramatical</h2></div>
        <div className="right-side">
            <h2 className="roubando-dindin">Obtenha a versão Premium$$$</h2>
            <div className="bolinha-do-perfil"></div>
        </div>
        </header>
    );
}