const SearchBar = () => {
  return (
    <>
      <form className=" w-full max-w-[200px] md:max-w-[400px]">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full ">
          <input
            type="text"
            id="simple-search"
            className=" text-black w-full  border border-gray-300  text-sm  rounded-lg    focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  bg-white dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none "
            placeholder="Search branch name..."
            required
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;