import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';

const Today = (props) => {
  const {day, month, year} = props
 
  return
  <>
  <span className="date">{day}</span>.
  <span className="date">{month}</span>.
  <span className="date">{year}</span>
  </>
}

const App = () => {
  return
  <>
  <Today day='07' month='07' year='07'></Today>
  <Today day='05' month='06' year='07'></Today>
  <Today day='06' month='07' year='08'></Today>
  </>
}



createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
