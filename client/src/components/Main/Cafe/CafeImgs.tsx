import React from 'react'

interface Props {
    item: string,
    index: number
}

const CafeImgs = ({ item, index }: Props) => {
    
    return (
        <div className='col-6 p-0 m-0'>
            <img
                className='col-12 p-0 m-0 cafeImg'
                key={item}
                src={item}
                title='Cafe Image'
                alt='cafeImg'
            />
        </div>
    )
}

export default CafeImgs