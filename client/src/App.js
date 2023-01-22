
import './App.css';
import PersonCard from './Components/PeresonCard';


function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jane"} lastName={'Doe'} age={45} hariColor={'black'}/>
      <PersonCard firstName={"John"} lastName={'Smith'} age={88} hariColor={'brown'}/>
      <PersonCard firstName={"Millard"} lastName={'Fillmore'} age={50} hariColor={'brown'}/>
      <PersonCard firstName={"Maria"} lastName={'Smith'} age={62} hariColor={'brown'}/>
    </div>
  );
}

export default App;
