import { FilterType } from "../../types/types";
import CheckBox from "../CheckBox/CheckBox";
import { FiltersData } from "./FilterConfig";

interface FiltersPropType {
  onFilterClick: (filterType: string, value: string) => void;
  onClose: () => void;
  appliedFilters: FilterType;
  onRemove: (key: string) => void;
  onClear: () => void;
}

const Filters: React.FC<FiltersPropType> = ({
  onFilterClick,
  onClose,
  appliedFilters,
  onRemove,
  onClear,
}) => {
  const someFilterApplied = Object.values(appliedFilters).some(
    (val) => val.length > 0
  );

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
            <div className="flex items-center gap-2">
              <p className="font-bold">{FilterData.key.toUpperCase()}</p>
              {appliedFilters[FilterData.key].length > 0 && (
                <button
                  className="ml-auto text-red-400"
                  onClick={() => {
                    onRemove(FilterData.key);
                  }}
                >
                  clear
                </button>
              )}
            </div>
            <hr className="mt-1 mb-2" />
            <div className="space-y-2 capitalize">
              {FilterData.value.map((item) => {
                return (
                  <CheckBox
                    key={item}
                    label={item}
                    filterType={FilterData.key}
                    onClick={onFilterClick}
                    checked={appliedFilters[FilterData.key].includes(item)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      {someFilterApplied && (
        <button className="text-red-500 font-bold" onClick={onClear}>
          clear all
        </button>
      )}
    </div>
  );
};

export default Filters;
