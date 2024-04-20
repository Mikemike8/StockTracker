import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/Stocker.js'

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>

          </thead>
          <tbody>
            <StockRow ticker="aapl"/>
            <StockRow ticker="goog"/>
            <StockRow ticker="msft"/>
            <StockRow ticker="Tsla"/>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default App;
