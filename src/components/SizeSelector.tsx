import React from 'react'
import { FC } from 'react'

const posibleSizes = ['XS', 'S', 'M', 'L', 'XL']

interface Props{
    selectedSize: string;
    onSizeChange: (size: string) => void;
}

const SizeSelector:FC<Props> = ( {selectedSize, onSizeChange}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
        {
            posibleSizes.map( size => (
                <button 
                key={size}
                className={selectedSize === size? 'active': '' }
                onClick={() => onSizeChange(size)}>
                    {size}
                </button>
            ))
        }
    </div>
  )
}

export default SizeSelector