import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles/app.scss";
import data from "./util";
import { setCurrentSong, setSongList } from "./actions";

import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

const App = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.libraryStatus);

  useEffect(() => {
    dispatch(setCurrentSong(data[0]));
    dispatch(setSongList(data));
  }, [dispatch]);

  return (
    <div className={`app ${isActive ? "library-active" : ""}`}>
      <Nav />
      <Song />
      <Player />
      <Library />
    </div>
  );
};

export default App;
