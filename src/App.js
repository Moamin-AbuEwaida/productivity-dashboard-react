import Sidebar from './components/sidebar/Sidebar'
import Body from './components/body/Body'
import Account from './components/account/Account'
import './App.css';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Body />
      <Account />
    </div>
  );
}

export default App;
