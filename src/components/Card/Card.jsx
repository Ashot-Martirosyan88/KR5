import './Card.css'
import { useState } from 'react'

function Card({ product }) {
	if (!product) {
		return <div className='error'>Product data is not available</div>
	}

	const [count, setCount] = useState(1)

	const plus = () => setCount(prev => prev + 1)
	const minus = () => setCount(prev => (prev > 1 ? prev - 1 : 1))

	const { title, price, description, category, image, rating } = product

	return (
		<div className='card'>
			<img src={image} alt={title} className='img' />
			<h2>{title}</h2>
			<p className='des'>{description}</p>
			<h3 className='cat'>Category - {category}</h3>
			<div className='pay'>
				<button className='plus' onClick={plus}>
					+
				</button>
				<h2 className='count'>{count}</h2>
				<button className='minus' onClick={minus}>
					-
				</button>
			</div>
			<h2 className='price'>${(price * count).toFixed(2)}</h2>
			<button className='buy'>BUY</button>
			<div className='info'>
				<div className='rating'>
					<img
						src='https://static.vecteezy.com/system/resources/thumbnails/000/378/728/small/Basic_Elements__28120_29.jpg'
						alt='star'
						className='star'
					/>
					<h3>{rating.rate}</h3>
				</div>
				<h3>Count = {rating.count}</h3>
			</div>
		</div>
	)
}

export default Card
