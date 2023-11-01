import "./JournalAddButton.css"
import CardButton from './../CardButton/CardButton'

function JournalAddButton() {

  return (
    <CardButton className="journal-add">
      <img src="./plus.svg" alt="add" />
      Новое воспоминание
    </CardButton>
  )
}

export default JournalAddButton