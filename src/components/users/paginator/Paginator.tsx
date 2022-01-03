import React, {useState} from "react";
import s from  './Paginator.module.css';
import {usersApi} from "../../api/api";

type PaginatorPropsType = {
    totalCount:number,
    pageSize:number,
    setCurrentPage:(currentPage: number) => void,
    setUsers:(newUsers: any) => void,
    currentPage:number,
    portionsSize:number
}
export const Paginator = (props:PaginatorPropsType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let [portionNumber, setPortionNumber]=useState(1)
    let portionCount = Math.ceil(pageCount/props.portionsSize)
    let leftPortionPageNumber = (portionNumber -1) * props .portionsSize + 1
    let rightPortionPageNumber = portionNumber * props.portionsSize

    const onSetCurrentPageHandler = (currentPage: number) => {
        props.setCurrentPage(currentPage)
        usersApi.getUsers(currentPage, props.pageSize)
            .then(data => props.setUsers(data.items))
    }
    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Previous</button>}
            {pages.filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(m => <span className={props.currentPage === m ? s.activePage : ''}
                                  onClick={() => onSetCurrentPageHandler(m)}>{m}</span>)}
            {portionCount > portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>
            }
        </div>
    )
}