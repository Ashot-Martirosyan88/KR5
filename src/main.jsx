import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import data from '../public/assets/data/data.js'

createRoot(document.getElementById('root')).render(<App data={data} />)
