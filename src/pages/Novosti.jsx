import React from 'react';
import '../styles/novosti.css';

const Novosti = () => {

    const vesti = [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    ]

    return (
        <div className='novostiRoditelj'>
            <div className='searchBarNovosti'>
                <input type='search' placeholder='Pretraga...'></input>
            </div>
            <div className='novosti'></div>
        </div>
    )
}

export default Novosti;