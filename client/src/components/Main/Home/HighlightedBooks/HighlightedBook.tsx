import React from 'react'
import { Link } from 'react-router-dom'
import { Book } from '../../../../utils/types'

interface Props {
  item: Book
  changer: () => void
}

const HighlightedBook = ({ item, changer }: Props) => {
  return (
    <div className='highlightedBook row mx-5 my-5 row-cols-2 py-5'>
      <div className='highlightedBookImgBackground mb-4 col ps-0 mx-5 '>
        <img
          className='highlightedBookImg'
          src={item.image}
          alt={item.title} />
      </div>
      <div className='col ms-5 mt-3 highlightedBookDivP'>
        <p>Title:{item.title}</p>
        <p>Author:{item.author}</p>
        <p>{item.summary}<Link to={`/shop/${item.title.split(' ').join('')}`}>read more</Link></p>
      </div>
      <div className='col-1'>
        <button className='highlightedBookButton'
          onClick={changer}>&gt;</button>
      </div>
    </div>
  )
}

export default HighlightedBook