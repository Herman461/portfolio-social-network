import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<aside className="page__side side-page">
			<ul className="side-page__list">
				<li><NavLink to="/profile" activeClassName="_active" className="side-page__link">Мой профиль</NavLink></li>
				<li><NavLink to="/dialogs" activeClassName="_active" className="side-page__link">Сообщения</NavLink></li>
				<li><NavLink to="/friends" activeClassName="_active" className="side-page__link">Друзья</NavLink></li>
				<li><NavLink to="/music" activeClassName="_active" className="side-page__link">Музыка</NavLink></li>
				<li><NavLink to="/gallery" activeClassName="_active" className="side-page__link">Фотографии</NavLink></li>
				<li><NavLink to="/users" activeClassName="_active" className="side-page__link">Поиск друзей</NavLink></li>
			</ul>
		</aside>
	);
}

export default Sidebar;