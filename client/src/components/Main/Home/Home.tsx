import react from 'react'
import { useAppSelector } from '../../../app/hooks'
import Loader from '../../Loader';
import CafeLibrary from './CafeLibrary';
import CafeLibraryChildZone from './CafeLibraryChildZone';
import CustomCarousel from './CustomCarousel';
import DivRouter from './DivRouter';
import HighlightedAuthors from './HighlightedAuthors/HighlightedAuthors';
import HighlightedBooks from './HighlightedBooks/HighlightedBooks';

const Home = () => {

  const books = useAppSelector(state => state.books)

  if (books.defBooks.length === 0) {
    return (
      <div className='mainLoader'>
        <Loader />
      </div>
    );
  } else
    return (
      <div>
        <CustomCarousel />
        <HighlightedBooks />
        <CafeLibrary />
        <HighlightedAuthors />
        <DivRouter />
        <CafeLibraryChildZone />
      </div>
    )
}

export default Home