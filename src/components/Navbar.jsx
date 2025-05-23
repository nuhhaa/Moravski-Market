import React from 'react';
import '../styles/navbar.css';
import Logo from '../assets/logo.png';

const Navbar1 = () => {
    return (
        <div className='roditeljNavbar'>
            <div className='podroditeljNavbar1'>
                <div className='nazivSajta'>
                    <img src={Logo} alt="Site Logo"></img>
                </div>
                <div className='searchBar'>
                    <input className='searchbar' type="text" placeholder='PRETRAGA' />
                </div>
                <div className='kontaktInformacije'>
                    <p className='brojTelefona' >+381629786930</p>
                    <p className='callCentar' >CALL CENTAR 09 - 18h</p>
                </div>
            </div>
            <div className='podroditeljNavbar2'>
                <button className='dugmeNavigacija'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> KATEGORIJE</button>
                <div className='navigacija'>
                    <a className='linkNavigacija' href='/'>Naslovna</a>
                    <a className='linkNavigacija' href='onama'>O nama</a>
                    <a className='linkNavigacija' href='#'>Prodavnica</a>
                    <a className='linkNavigacija' href='#'>Proizvodjaci</a>
                    <a className='linkNavigacija' href='distribucija'>Distributivni centar</a>
                    <a className='linkNavigacija' href='#'>Novosti</a>
                    <a className='linkNavigacija' href='#'>Kontakt</a>
                </div>
                <div className='ikonice'>
                    <button className='ikonica'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
                    <button className='ikonica'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
                    <button className='ikonica'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></button>
                    <button className='ikonica'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar1;

