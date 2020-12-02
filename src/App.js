import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./styles/app.scss";
import data from "./util";
import { setCurrentSong, setSongList } from "./actions"

import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentSong(data()[0]));
    dispatch(setSongList(data()));
  }, [dispatch]);

  return (  
    <>
      <Nav />
      <Song />
      <Player />
      <Library />
    </>
  );
}

export default App;
