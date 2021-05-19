import gd from "./gd.png";
import './App.css';

function GrandDesignsHeader () {
    return (
        <div className="Gd-header">
        <img src={gd} className="Gd-logo" alt="grand-designs-logo" />
        </div>
    );
}

export default GrandDesignsHeader;