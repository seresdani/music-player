import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, setSongList } from "../actions";

const LibrarySong = ({song}) => {
    const dispatch = useDispatch();
    const audioPlayer = useSelector(state => state.audioPlayer);
    const isPlaying = useSelector(state => state.isPlaying);
    const songList = useSelector(state => state.songList);
    const songUpdateHandler = () => {
        dispatch(setSongList(songList.map(s => {return {...s, active: s.id === song.id}} )));
        dispatch(setCurrentSong({...song, active: true}));
        if (isPlaying) {
            const playPromise = audioPlayer.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioPlayer.play();
                });
            }
        }
    };
    return (
        <div className={`library-song ${song.active ? "selected" : ""}`} onClick={songUpdateHandler}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;