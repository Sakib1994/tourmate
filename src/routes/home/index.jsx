import { h } from 'preact';
import AddTodo from '../../components/add-todo';
import Tours from '../../components/tours';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<div>
			<h1>Home</h1>
		<p>This is the Home component.</p>
		<Tours name={'tours'}/>
		</div>
		<div>
			Add Todo
			<AddTodo/>
		</div>
	</div>
);

export default Home;
