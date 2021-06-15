import gd from "../images/gd.png";
import '../css/App.css';

const GrandDesignsHeader = () => {
    return (
        <div className="Gd-header">
            <img src={gd} className="Gd-logo" alt="grand-designs-logo" />
        </div>
    );
}

export default GrandDesignsHeader;