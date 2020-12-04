import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faCat } from "@fortawesome/free-solid-svg-icons";
import { setLibraryStatus } from "../actions";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <FontAwesomeIcon icon={faCat} size="2x" />
      <button onClick={() => dispatch(setLibraryStatus())}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
