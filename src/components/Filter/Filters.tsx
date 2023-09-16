import CheckBox from "../checkbox/CheckBox";
import { FiltersData } from "./FilterConfig";

interface FiltersPropType {
  onFilterClick: (filterType: string, value: string) => void;
  onClose: () => void;
}

const Filters: React.FC<FiltersPropType> = ({ onFilterClick, onClose }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-2">
        <p className="font-bold text-gray-700">Filters</p>
        <p className="md:hidden" onClick={onClose}>
          X
        </p>
      </div>
      {FiltersData.map((FilterData) => {
        return (
          <div
            key={FilterData.key}
            className=" font-medium text-slate-600 text-sm border rounded-md p-2"
          >
            <p className="font-bold">{FilterData.key.toUpperCase()}</p>
            <hr className="mt-1 mb-2" />
            <div className="space-y-2 capitalize">
              {FilterData.value.map((item) => {
                return (
                  <CheckBox
                    label={item}
                    filterType={FilterData.key}
                    onClick={onFilterClick}
                  />
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
