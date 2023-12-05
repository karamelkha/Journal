import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({ items, setItem }) {
	const { userId } = useContext(UserContext);
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	const filteredItems = useMemo(() => items
		.filter(el => el.userId === userId)
		.sort(sortItems), [items, userId]);

		let empty = <> 
		<p className="journal-list__empty">Здесь пока пусто</p>
		<div className="pomp">
			<img className="pom-r" src='/assets/pom4.svg' alt="" />
			<img className="pom-left" src='/assets/pom4.svg' alt="" />
			<img className="pom-r" src='/assets/pom4.svg' alt="" />
			<img className="pom-left" src='/assets/pom4.svg' alt="" />
		</div>
		 </>

	if (items.length === 0) {
		return empty;
	}


	return <>
		{filteredItems
			.map(el => (
				<CardButton key={el.id} onClick={() => setItem(el)}>
					<JournalItem
						title={el.title}
						post={el.post}
						date={el.date}
					/>
				</CardButton>
			))}
	</>;
}

export default JournalList;


