import { useState } from "react";
import "./Paginator.scss";

const Paginator = (props) => {
  let portionSize = 10;
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftEdge = (portionNumber - 1) * portionSize + 1;
  let rightEdge = portionNumber * portionSize;
  

  return (
    <div className="items__counter--list">
      {portionNumber > 1 && (
        <button
          className={"items__counter--button"}
          onClick={() => setPortionNumber(1)}
        >
          Начало
        </button>
      )}
      {portionNumber > 1 && (
        <button
          className={"items__counter--button"}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          Назад
        </button>
      )}
      {pages
        .filter((p) => p >= leftEdge && p <= rightEdge)
        .map((p) => {
          return (
            <p
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              className={`items__counter--item ${
                props.currentPage === p && "items__counter--selected"
              } `}
            >
              {p}
            </p>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={"items__counter--button"}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          Вперед
        </button>
      )}
      {portionCount > portionNumber && (
        <button
          className={"items__counter--button"}
          onClick={() => setPortionNumber(portionCount)}
        >
          Конец
        </button>
      )}
    </div>
  );
};

export default Paginator;
