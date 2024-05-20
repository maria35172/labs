import './App.css';
import img1 from '../src/img/piza1.jpg'
import PizzaCard from '../src/component/PizzaCard'

function App() {
  
  return (
    <> <PizzaCard img={img1} title='Пепперони' text='Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла' price='От 550р'/> </>
  );
}

export default App;