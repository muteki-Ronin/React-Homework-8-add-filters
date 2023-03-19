// CORE
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { filtersAction } from "../../store/filters/filters-actions";
// SELECTORS
import { filtersSelector } from "../../store/filters/filters-selectors";
// CONSTS
import { ALL, ACTIVE, COMPLETED } from "../../store/filters/filters-consts";
// STYLE
import "./style.css";

export const FiltersBtnPanel = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filtersSelector);

  return (
    <div className="filter-btn_panel">
      <button
        className={filter === ALL ? "active-btn" : ""}
        onClick={() => dispatch(filtersAction(ALL))}
      >
        All todos
      </button>
      <button
        className={filter === ACTIVE ? "active-btn" : ""}
        onClick={() => dispatch(filtersAction(ACTIVE))}
      >
        Active todos
      </button>
      <button
        className={filter === COMPLETED ? "active-btn" : ""}
        onClick={() => dispatch(filtersAction(COMPLETED))}
      >
        Completed todos
      </button>
    </div>
  );
};
