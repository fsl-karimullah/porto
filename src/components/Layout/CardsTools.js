import React from 'react'

const CardsTools = (props) => {
    return (
        <div>
            <div className=' w-28 m-20 '>
                <ul>
                    <li>
                        <img src={props.img} alt='img-logo'/>
                        <p className='text-center m-2 text-base font-sans font-semibold '>{props.title}</p>    
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardsTools
