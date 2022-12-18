import React from 'react'
import { Link } from 'react-router-dom';
import { Author } from '../../../../utils/types'

interface Props {
    item: Author
    changer:()=>void;
  }

const HighlightedAuthor = ({item,changer}:Props) => {
  return (
    <div className='highlightedBook row mx-5 my-5 row-cols-2 py-5'>
    <div className='highlightedBookImgBackground mb-4 col ps-0 mx-5 '>
      <img
        className='highlightedBookImg'
        src={item.image}
        alt={item.name} />
    </div>
    <div className='col ms-5 mt-3 highlightedBookDivP'>
        <p><b>{item.name}</b></p>
        <p>{item.biography}<Link to={`authors/${item.name.split(' ').join('')}`}>read more</Link></p>
    </div>
    <div className='col-1'>
      <button className='highlightedBookButton'
      onClick={changer}>&gt;</button>
    </div>
  </div>
  )
}

export default HighlightedAuthor