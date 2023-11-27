import './App.css'
import Header from "./components/Header/Header"
import LeftPanel from "./layout/leftPanel/LeftPanel"
import JournalAddButton from "./components/JournalAddButton/JournalAddButton"
import JournalList from "./components/JournalList/JournalList"
import Body from "./layout/Body/Body"
import JournalForm from "./components/JournalForm/JournalForm"
import React, { useState } from 'react'
import { useLocalStorage } from './hooks/use-localstorage.hook'
import { UserContext } from './context/user.context'

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }));
}

function App() {

  const [items, setItems] = useLocalStorage('data');
  const [userId, setUserId] = useState(1)

  const addItem = item => {
    setItems([...mapItems(items), {
      post: item.post,
      title: item.title,
      date: new Date(item.date),
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    }])
  }

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <div className='app'>
        <Header />
        <div className='layout'>
          <LeftPanel>
            <JournalAddButton />
            <JournalList items={mapItems(items)} />
          </LeftPanel>

          <Body>
            <JournalForm onSubmit={addItem} />
          </Body>
        </div>
      </div>
    </UserContext.Provider>

  )
}

export default App