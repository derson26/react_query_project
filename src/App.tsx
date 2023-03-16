import React from 'react';
import { Routes, Route } from "react-router-dom"
import Header from "./components/partials/header"
import PageNotFound from './components/page-not-found';
import Error from './components/error';
import Loading from './components/loading';

const LazyHome = React.lazy(()=> import('./components/home'));
const LazySingleUser = React.lazy(()=> import('./components/single_user'));
function App() {

  return (
    <div>
      <Header />
      <main className="container mx-auto bg-white">
        <Routes>
          <Route path="/" element={ <React.Suspense fallback={<Loading />}> <LazyHome /></React.Suspense>} />
          <Route path='/:id' element={<React.Suspense fallback={<Loading />}> <LazySingleUser />
          </React.Suspense>} />
          
          <Route path="/error" element={ <Error /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App
