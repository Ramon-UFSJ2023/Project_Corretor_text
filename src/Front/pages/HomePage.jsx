import HeaderBar from "../components/HeaderBar";
import NavBar from "../components/NavBar";
import "./style/homepage.css"

export default function HomePage(){
    return(
        <div className="container">
            <HeaderBar />
            <NavBar />
        </div>
    );
}

