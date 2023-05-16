import { useField } from "../hooks/useField";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { useState, useEffect } from "react";
import riderService from "../services/riderService";

interface TrackRiderArgs {
    setMarker: (mark: google.maps.LatLngLiteral) => void
    setCenter: (mark: google.maps.LatLngLiteral) => void
    setDest: (mark: google.maps.LatLngLiteral) => void
}

export const TrackRider = ({ setMarker, setDest, setCenter }: TrackRiderArgs) => {
    const riderID = useField('text')
    const fpID = useField('text')
    const user = useSelector((state: RootState) => state.user)
    const [liveTrack, setLiveTrack] = useState<Boolean>(false);

    useEffect(() => {
        let intervalId: any;

        if (liveTrack) {
            intervalId = setInterval(() => {
                track()
            }, 4000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [liveTrack, track]);



    if (!user) {
        return <></>
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function track() {
        if (!user) {
            //erro handling here
            return
        }
        const rider = await riderService.getRider({ token: user.token, id: riderID.value, fpID: fpID.value })
        console.log(rider)
        const riderPos = {
            lat: rider.lat,
            lng: rider.lng
        }

        setMarker(riderPos)
        setCenter(riderPos)
        setDest({
            lat: rider.destination.lat,
            lng: rider.destination.lng
        })
    }
    const handleTrack = async (event: any) => {
        event.preventDefault()
        try {
            track()
            setLiveTrack(true)
        } catch (err) {
            console.log(err)
        }

    }





    return (
        <div>
            <h1>מעקב שליח</h1>
            <form onSubmit={handleTrack}>
                <div>
                    מספר בית עסק <input {...fpID} />
                </div>
                <div>
                    מספר מעקב: <input {...riderID} />
                </div>
                <button type="submit">מעקב</button>
            </form>
        </div>
    )


}
export default TrackRider