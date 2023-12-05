import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

const logos = ['../public/assets/logo-1.png', '../public/assets/logo-2.png'];

function Header() {

	return (
		<>
			<Logo image={logos[0]} />
			<SelectUser />
		</>
	);
}

export default Header;