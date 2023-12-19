import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className='py-16 bg-slate-100 min-h-[100vh]'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
