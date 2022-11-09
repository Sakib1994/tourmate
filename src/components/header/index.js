import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useContext } from 'preact/hooks';
import { AppState } from '../app';
import style from './style.css';

const Header = () => {
	const {todos}=useContext(AppState)
	return <header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile">Me({todos.value.length})</Link>
			<Link activeClassName={style.active} href="/profile/john">John</Link>
		</nav>
	</header>
};

export default Header;
