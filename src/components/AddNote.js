import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "../assets/add.svg";

const AddNote = () => {
  return (
    <Link to={"/note/new"} className="floating-button">
      <AddIcon />
    </Link>
  );
};

export default AddNote;
