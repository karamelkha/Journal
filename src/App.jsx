import './App.css'
import LeftPanel from './layout/leftPanel/LeftPanel'
import JournalList from './components/JournalList/JournalList'
import Header from './components/Header/Header'
import Body from './layout/Body/Body'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import { useState } from 'react'

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: "Подготовка к обновлению курсов",
  //   text: "Горные походы открывают удивительные природные ландшафты, испытывают туристов",
  //   date: new Date()
  // },
  // {
  //   id: 2,
  //   title: "Поход в горы",
  //   text: "Думал, что очень много времени",
  //   date: new Date()
  // }
]


function App() {

  const [items, setItems] = useState(INITIAL_DATA);


  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }])
  }





  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>

  )
}

export default App