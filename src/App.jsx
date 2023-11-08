import './App.css'
import Bg from "./layout/Bg/Bg"
import Header from "./components/Header/Header"
import LeftPanel from "./layout/leftPanel/LeftPanel"
import JournalAddButton from "./components/JournalAddButton/JournalAddButton"
import JournalList from "./components/JournalList/JournalList"
import Body from "./layout/Body/Body"
import JournalForm from "./components/JournalForm/JournalForm"
import { useState } from 'react'
import React from 'react'



const INITIAL_DATA = []

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
      <Bg />
      <Header />
      <div className='layout'>
      <LeftPanel>
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
      </div>
    </div>

  )
}

export default App