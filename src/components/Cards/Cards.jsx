import Card from '../Card/Card.jsx'
import './Cards.css'

function Cards(props) {
	return (
		<div className='Cards'>
			{props.data.map(product => (
				<Card key={product.id} product={product} />
			))}
		</div>
	)
}

export default Cards
