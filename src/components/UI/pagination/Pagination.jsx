import React, { useMemo } from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPage, page, changePage}) => { //количество страниц, номер текущей страницы, ф-ию которая текущую старницу изменяет 
    let pagesArray = useMemo(() => getPagesArray(totalPage), [totalPage])
    return (
        <div className='page__wrapper'>
        {pagesArray.map(p => 
          <span 
          onClick={() => changePage(p)}
          key={p} 
          className={page === p ? 'page page__current' : 'page'}>
            {p}
           </span>
        )}
        </div>
    )
}

export default Pagination