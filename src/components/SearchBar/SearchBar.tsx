import { useState } from "react";
import { SearchIcon } from "../../assests";

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  function handleChange(e: any) {
    const { value } = e.target;
    setSearchInput(value);
    onChange(value);
  }
  const [searchInput, setSearchInput] = useState("");
  return (
    <form className=" w-full  max-w-[350px]">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full ">
        <SearchIcon className="absolute top-3 left-3" />
        <input
          type="text"
          onChange={handleChange}
          value={searchInput}
          id="simple-search"
          className=" text-black w-full  border border-gray-300  text-sm  rounded-lg    focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none "
          placeholder="Search branch name..."
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
