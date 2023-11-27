import "./JournalList.css"
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import pomp from "./../../assets/pom4.svg"
import { useContext } from "react";
import { UserContext } from "../../context/user.context";


function JournalList({ items }) {
    const { userId } = useContext(UserContext)

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
        {items
            .filter(el => el.userId === userId)
            .sort(sortItems)
            .map(el => (
                <CardButton key={el.id}>
                    <JournalItem
                        title={el.title}
                        post={el.post}
                        date={el.date}
                    />
                </CardButton>
            ))}
    </>;



}

export default JournalList