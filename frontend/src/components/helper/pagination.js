import React, {useEffect, useState} from 'react';
import {FaChevronRight} from "react-icons/fa";
import {FaChevronLeft} from "react-icons/fa6";

const Pagination = ({pageObj, handleDisplay, rootUrl}) => {
    const {previous, next, current, last} = pageObj
    const [rangeWithDots, setRangeWithDots] = useState([])
    const getPageNums = (c, m) => {
        let current = c,
            last = m,
            delta = 2,
            left = current - delta,
            right = current + delta + 1,
            range = [],
            rangeWithDots = [],
            l;

        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || i >= left && i < right) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    }

    useEffect(() => {
        setRangeWithDots(getPageNums(current, last))
    }, [current]);
    return (
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
            <ul className="pagination">
                {
                    previous &&
                    <li>
                        <div onClick={() => handleDisplay(previous)} className="pagination__link">
                            <FaChevronRight/>
                        </div>
                    </li>
                }
                {rangeWithDots.map(item => {
                     return <li>
                         {
                             item>0?
                             <div key={item} onClick={() => handleDisplay(`${rootUrl}/?page=${item}`)}
                                  className={current === item ?
                                      "pagination__link pagination__link--active"
                                      : "pagination__link"}>{item}</div>
                                 : <div className='pagination__link'>{item}</div>
                         }
                     </li>
                    }
                )}
                {
                    next &&
                    <li>
                        <div onClick={() => handleDisplay(next)} className="pagination__link">
                            <FaChevronLeft/>
                        </div>
                    </li>
                }
            </ul>
            <select className="w-20 form-select box mt-3 sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
            </select>
        </div>
    );
};

export default Pagination;