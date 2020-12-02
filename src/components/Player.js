import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import moment from 'moment';

import { setIsPlaying, setAudioPlayer } from "../actions";

const Player = () => {
    const dispatch = useDispatch();
    const currentSong = useSelector(state => state.currentSong);
    const isPlaying = useSelector(state => state.isPlaying);
    const audioPlayer = useSelector(state => state.audioPlayer);
    const audioRef = useRef();
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });

    useEffect(() => {
        dispatch(setAudioPlayer(audioRef.current));
    }, [dispatch]);

    const timeUpdateHandler = (e) => {
        if (!Number.isNaN(e.target.duration)) {
            const currentTime = e.target.currentTime;
            const duration = e.target.duration;
            setSongInfo({...songInfo, currentTime, duration})
        }
    };
    
    const playSongHandler = () => {
        if (isPlaying) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
        dispatch(setIsPlaying(!isPlaying));
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    const getTime = (time) => {
        return moment(`${time / 60}:${time % 60}`, "mm:ss").format("mm:ss"); 
    };

    return (    
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                 type="range"
                 min={0}
                 max={songInfo.duration}
                 value={songInfo.currentTime}
                 onChange={dragHandler}
                 onMouseDown={() => isPlaying && audioPlayer.pause()}
                 onMouseUp={() => isPlaying && audioPlayer.play()}
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying? faPause : faPlay}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio ref={audioRef} src={currentSong.audio} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ></audio>
        </div>
    )
};

export default Player;