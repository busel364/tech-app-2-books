import React, { useState } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import HighlightedBook from './HighlightedBook';

const HighlightedBooks = () => {

  const { highlightedBooks } = useAppSelector(state => state.books);
  const [count, setCount] = useState(0);

  const handleChanger = () =>{
    if(count>=highlightedBooks.length-1){
      setCount(0);
    }else{
      setCount(prev=>prev+1);
    }
  }
  
  setTimeout(handleChanger,20000);

  return (
    <div className='row container-fluid highlightedBooks my-5'>
      <p className='mt-3'>Highlighted Books</p>
        {highlightedBooks.filter((value,index)=>index===count).map((item) => <HighlightedBook changer={handleChanger} item={item} key={item.ISBN} />)}
    </div>

  )
}

export default HighlightedBooks