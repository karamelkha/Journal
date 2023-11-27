import './App.css'
import Header from "./components/Header/Header"
import LeftPanel from "./layout/leftPanel/LeftPanel"
import JournalAddButton from "./components/JournalAddButton/JournalAddButton"
import JournalList from "./components/JournalList/JournalList"
import Body from "./layout/Body/Body"
import JournalForm from "./components/JournalForm/JournalForm"
import React from 'react'
import { useLocalStorage } from './hooks/use-localstorage.hook'
import { UserContextProvider } from './context/user.context'

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


  const addItem = item => {
    setItems([...mapItems(items), {
      ...item,
      date: new Date(item.date),
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    }])
  }

  return (
    <UserContextProvider>
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
    </UserContextProvider>
  )
}

export default App