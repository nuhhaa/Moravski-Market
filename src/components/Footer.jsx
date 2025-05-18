import React from 'react'
import '../styles/footer.css'
import FooterSlika from '../assets/footer.jpeg'
import FooterStamp from '../assets/footerstamp.png'

const Footer = () => {
    return (
        <div className='footerRoditelj'>
            <img src={FooterSlika} className='footerSlika' />
            <div className='podaci'>
                <div className='linkoviRoditelj'>
                    <div className='linkovi'>
                        <h2>MAPA SAJTA</h2>
                        <a href='#'>Naslovna</a>
                        <a href='#'>O nama</a>
                        <a href='#'>Prodavnica</a>
                        <a href='#'>Proizvodjaci</a>
                        <a href='#'>Distributivni centar</a>
                        <a href='#'>Novosti</a>
                        <a href='#'>Kontakt</a>
                    </div>
                    <div className='linkovi'>
                        <h2>KUPOVINA</h2>
                        <a href='#'>Zasto da kupujem lokalno?</a>
                        <a href='#'>Kako kupiti?</a>
                        <a href='#'>Nacin dostave</a>
                        <a href='#'>Nacin placanja</a>
                        <a href='#'>Politika privatnosti</a>
                    </div>
                    <div className='info'>
                        <h2>KONTAKT</h2>
                        <p>Bate Jankovića 48
                            32000 Čačak, Srbija</p>
                        <p>E-mail: <a href='#'>moravskimarket@gmail.com</a></p>
                        <p>Call centar: <a href='#'>061 67 15 941</a></p>
                        <p>Radnim danom: 08:00-17:00h Vikend: ne radimo</p>
                    </div>
                    <div className='media'>
                        <h2>ZAPRATITE NAS</h2>
                        <div className='social'>
                            <a href='#'>          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                            <a href='#'>        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
                        </div>
                    </div>
                </div>
                <img src={FooterStamp}></img>
            </div>
            <div className='footerZadnje'>
                <p>Cene na sajtu su iskazane u dinarima sa uračunatim porezom, a plaćanje se vrši isključivo u dinarima. Nastojimo da budemo što precizniji u opisu proizvoda, prikazu slika i samih cena, ali ne možemo garantovati da su sve informacije  kompletne i bez grešaka. Svi artikli prikazani na sajtu su deo naše ponude i ne podrazumeva se da su dostupni u svakom trenutku. Za raspoloživost artikala pozovite naš Call centar.</p>
                <div className='traka'>
                    <p>Moravski Market © 2025 Developed by <a href='#'>SuperWeb</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;