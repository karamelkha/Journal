import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';
import styles from './Header.module.css'

const logos = ['../public/assets/logo-1.png', '../public/assets/logo-2.png'];

function Header() {

	return (
		<>
		<header className={styles.header}>
			<Logo image={logos[0]} />
			<SelectUser />
		</header>
		</>
	);
}

export default Header;