import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import Home from './Pages/Home';
import Programs from './Pages/Programs';
import PageLayout from './Layout/PageLayout';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Suspense fallback={<>Loading...</>}><PageLayout/></Suspense>}>
            <Route path='/' index element={<Suspense fallback={<>Loading...</>}><Home/></Suspense>}/>
            <Route path='/programs'element={<Suspense fallback={<>Loading...</>}><Programs/> </Suspense>}/>
        </Route>
    </Routes>
  );
}

export default App;
