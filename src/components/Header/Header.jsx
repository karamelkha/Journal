import  styles from "./Header.module.css"

function Header({changedUser}) {

  const changeUser = (e)=>{
    console.log(e.target.value)
  } 

    return (
      <>
      <h1 className={styles.header}>Мои заметки</h1>
      <select name="user" id="user" onChange={changeUser}>
        <option value="1">Ксю</option>
        <option value="2">Кир</option>
      </select>
      </>
    )
}

export default Header