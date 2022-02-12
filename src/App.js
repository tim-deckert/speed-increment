import './App.css';
import InitiativeContainer from './containers/InitiativeContainer/InitiativeContainer';
import { CharacterListProvider } from './contexts/ListOfCharacters';

function App() {
  return (
    <CharacterListProvider>
      <div className="App">
        <InitiativeContainer />
      </div>
    </CharacterListProvider>
  );
}

export default App;
