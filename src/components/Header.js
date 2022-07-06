import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<img src = "icon2.png" className='head' alt=""></img>
			<h1>Super Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Switch Theme
			</button>
		</div>
	);
};

export default Header;