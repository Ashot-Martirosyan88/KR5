import './Nav.css'

function Nav() {
	return (
		<div className='nav'>
			<div className='logo'>MYyShop</div>
			<div className='search'>
				<input type='text' placeholder='Search...' className='search-input' />
			</div>
			<div className='menu'>
				<a href='/' className='nav-item'>
					Home
				</a>
				<a href='/products' className='nav-item'>
					Products
				</a>
				<a href='/about' className='nav-item'>
					About
				</a>
				<a href='/contact' className='nav-item'>
					Contact
				</a>
			</div>
		</div>
	)
}

export default Nav
