import React from 'react'
import '../styles/Distribucija.css';
import Distribucija1 from '../assets/distribucija1.jpeg';
import Distribucija2 from '../assets/distribucija2.jpeg';
import Distribucija3 from '../assets/distribucija3.jpeg';

const Distribucija = () => {
    return (
        <div className='distribucijaRoditelj'>
            <div className='textDistribucijaRoditelj'>
                <div className='text1Distribucija'>
                    <h1>Distributivni centar</h1>
                    <h2>Posetite nas i preuzmite poručene proizvode</h2>
                </div>
                <div className='text2Distribucija'>
                    <h3 className='text2DistribucijaPrviNaslov'>Želite da prodajete online?</h3>
                    <p>Uvećajte vaše prihode, pristupanjem najširoj mreži prodavaca na siguran i transparentan način.
                        Ukoliko želite da prodajete vaše proizvode preko našeg portala možete nas pozvati na tel:  061 67 15 941 ili nas kontaktirati preko kontakt forme, a možete i direkno doći u distributivni centar.</p>
                    <h3>Distributivni centar</h3>
                    <p>Predviđeno je da bude prodajno - izložbeno - distributivni centar, odnosno da se prostor koristi multifunkcionalno.
                        U njemu će biti izloženi naši zdravi, lokalni, domaći proizvodi, koji su izloženi i na web shopu, gde će moći da se pogledaju, kupe, preuzmu.
                        Služiće kao logistički centar za pripremu isporuka, odnosno za sabiranje, odvajanje, pakovanje i eventualno preuzimanje ili isporuku poručenih proizvoda.</p>
                    <h3>Distributivni centar se nalazi na adresi:</h3>
                    <p>Bate Jankovića 48
                        32000 Čačak, Srbija
                    </p>
                    <p>Tel: <p className='telefonDistribucija'>061 67 15 941</p></p>
                </div>
            </div>
            <div className='slikeDistribucijaRoditelj'>
                <img src={Distribucija1} alt="Distribucija 1" className='slikaDistribucija1' />
                <img src={Distribucija2} alt="Distribucija 2" className='slikaDistribucija2' />
                <img src={Distribucija3} alt="Distribucija 3" className='slikaDistribucija3' />
            </div>
        </div>
    )
}

export default Distribucija;