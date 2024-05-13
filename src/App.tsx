import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainPage from './pages/Main';
import CategoryPage from "./pages/Category";
import DetailPage from "./pages/Detail";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/category' element={<CategoryPage />} />
            <Route path='/detail' element={<DetailPage />} />
          </Routes> 
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;