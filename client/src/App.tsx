import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchBooksAndAuthors, fetchMenu } from './asyncActions/AsyncActions';
import FooterMain from './components/Footer/FooterMain';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const dispatch = useAppDispatch();
  const defBooks = useAppSelector(state => state.books.highlightedBooks)

  useEffect(() => {
    if (defBooks.length === 0)
      dispatch(fetchBooksAndAuthors());
      dispatch(fetchMenu());
  }, []);

  return (
    <div className="App">
      <Header/>
      <Main/>
      <FooterMain/>
    </div>
  );
}

export default App;
