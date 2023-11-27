import SelectUser from "../SelectUser/SelectUser"
import styles from "./Header.module.css"

function Header() {


  return (
    <>
      <h1 className={styles.header}>Мои заметки</h1>
      <SelectUser  />
    </>
  )
}

export default Header