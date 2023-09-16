import CheckBox from "../checkbox/CheckBox";
import { FiltersData } from "./FilterConfig";

interface FiltersPropType {
  onFilterClick: (filterType: string, value: string) => void;
}

const Filters: React.FC<FiltersPropType> = ({ onFilterClick }) => {
  return (
    <div className="flex flex-col px-[10px] ">
      {FiltersData.map((FilterData) => {
        return (
          <div
            key={FilterData.key}
            className=" font-medium text-slate-600 text-sm "
          >
            <p>{FilterData.key.toUpperCase()}</p>
            <div>
              {FilterData.value.map((item) => {
                return (
                  <div className="flex items-center mb-4">
                    <CheckBox
                      label={item}
                      filterType={FilterData.key}
                      onClick={onFilterClick}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
