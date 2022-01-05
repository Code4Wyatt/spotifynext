import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
    const playlist = useRecoilValue(playlistState);
    return <div className="px-8 flex space-y-1 pb-28 flex-col text-white">
            {playlist?.tracks.items.map((track, i) => (
                <Song key={track.id} track={track} order={i}/>
            ))}
        </div>
    
}

export default Songs
