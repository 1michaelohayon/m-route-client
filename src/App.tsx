import Login from "./components/Login";
import TrackRider from "./components/TrackRider";
import { useState } from "react";

import Map from "./components/Map";

function App() {
    const [marker, setMarker] = useState({ lat: 32.71750, lng: 35.17421 })
    const [destMark, setDestMark] = useState({ lat: 32.91750, lng: 35.17421 })
    const [center, setCenter] = useState({ lat: 32.71750, lng: 35.17421 })

    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "4fr 1fr",
            }}>
                <div>
                    <Map mark={marker} dest={destMark} center={center} />
                </div>
                <div style={{ direction: "rtl" }}>
                    <Login />
                    <TrackRider setMarker={setMarker} setDest={setDestMark} setCenter={setCenter} />
                </div>
            </div>
        </>
    );
}

export default App;
