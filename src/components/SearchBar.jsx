import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const { searchRef } = useContext(TaskContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        ref={searchRef}
        onChange={() => {}}  // forces rerender
      />
    </div>
  );
}

export default SearchBar;

