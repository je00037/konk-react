import kev from "../images/kev.png";
import '../css/App.css';

const KevContainer = () => {
    return (
        <div className="Kev-container">
            <img src={kev} className="Kev-image" alt="kevin-mccloud" />
        </div>
    );
}

export default KevContainer;