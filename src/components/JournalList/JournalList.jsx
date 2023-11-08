import "./JournalList.css"
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import pomp from "./../../assets/pom4.svg"


function JournalList({ items }) {

    let empty = <>
    <p className="journal-list__empty">Здесь пока пусто</p>
    <div className="pomp">
    <img className="pom-r" src={pomp} alt="" />
    <img className="pom-left" src={pomp} alt="" />
    <img className="pom-r" src={pomp} alt="" />
    <img className="pom-left" src={pomp} alt="" />
    </div>
    </>

    if (items.length === 0) {
        return empty
    }

    const sortItems = (a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    };

    return <>
        {items.sort(sortItems).map(el => (
            <CardButton key={el.id}>
                <JournalItem
                    title={el.title}
                    text={el.text}
                    date={el.date}
                />
            </CardButton>
        ))}
    </>;



}

export default JournalList