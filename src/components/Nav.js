import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { setLibraryStatus } from "../actions";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => dispatch(setLibraryStatus())}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
