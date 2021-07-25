import React from 'react';
import * as axios from "axios";

const UsersPaging = (props) => {
	// const range = (from, to, step = 1) => {
	// 	let i = from;
	// 	const range = [];

	// 	while (i <= to) {
	// 		range.push(i);
	// 		i += step;
	// 	}
	// 	return range;
	// }
	// const fetchPageNumbers = () => {
	// 	const totalPages = Math.ceil(props.totalUsersCount / props.pageSize);
	// 	const totalNumbers = (props.pageNeighbours * 2) + 3;
	// 	const totalBlock = totalNumbers + 2;
		
	// 	if (totalPages > totalBlock) {
	// 		const startPage = Math.max(2, props.selectedPage - pageNeighbours);
	// 		const endPage = Math.min(totalPages - 1, props.selectedPage + pageNeighbours);
	// 		let pages = range(startPage, endPage);

	// 		const hasLeftSpill = startPage > 2;
	// 		const hasRightSpill = (props.totalUsersCount - endPage) > 1;
	// 		const spillOffset = totalNumbers - (pages.length + 1);
	// 	}
	// }
	const handlePageChangeLeft = (e) => {
		e.preventDefault();
		if (props.selectedPage > 1) {
			props.setSelectedPage(props.selectedPage - 1)
		} else {
			return;
		}
		
	}

	const handlePageChangeRight = (e) => {
		e.preventDefault();
		// if (props.selectedPage < 1) //! Доделать стрелку-переключатель на следующий элемент, сделать так, чтобы не выходило за пределы максимального значения
		props.setSelectedPage(props.selectedPage + 1)
	}


	let totalPages = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

	let pagesElements = pages.map((page, pageIndex) => {
		if (props.totalUsersCount - 7 < props.selectedPage) {
			if (props.totalUsersCount - 8 > pageIndex) {
				return null;
			}
			else {
				return page === props.selectedPage + 7 ? 
					<li><a href="" className="paging__item">...</a></li> :  
					<li><a href=""
						onClick={(e) => props.onPageClick(e, page)}
						className={`paging__item${page === props.selectedPage ? " _active" : ""}`}>{page}</a></li>
			}
		}	
		else {
			if (props.selectedPage + 6 < pageIndex || props.selectedPage - 2 > pageIndex) {
				return null;	
			} else {
				return page === props.selectedPage + 7 ? 
					<li><a href="" className="paging__item">...</a></li> :  
					<li><a href=""
						onClick={(e) => props.onPageClick(e, page)}
						className={`paging__item${page === props.selectedPage ? " _active" : ""}`}>{page}</a></li>
			}
		}
	})

	return (
		<div className="users__pages">
			<div className="paging">
				<a href="" 	onClick={(e) => handlePageChangeLeft(e)} className="paging__arrow paging__arrow_previous"></a>
				<ul className="paging__list">
					{pagesElements}
				</ul>
				<a href="" onClick={(e) => handlePageChangeRight(e)} className="paging__arrow paging__arrow_next"></a>
			</div>
		</div>
	);
}
export default UsersPaging;