import { useSelector } from "react-redux";

import LibrarySong from "./LibrarySong";

const Library = () => {
  const songs = useSelector((state) => state.songList);
  const isActive = useSelector((state) => state.libraryStatus);
  return (
    <div className={`library ${isActive ? "active-library" : ""}`}>
      <h2>Library</h2>
      {songs?.map((song) => (
        <LibrarySong key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Library;
