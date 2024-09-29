import Card from './components/Card';
import Finder from './components/Finder';
import './styles.css';

function App() {
  return (
    <div style={{ backgroundColor: '#656d6e', minHeight: '100vh' }}>
      <Finder/>
      <Card />
    </div>
  );
}

export default App;