import React from 'react';
import '../styles/naslovna.css';
import Slika1 from '../assets/slika1.jpeg';
import Slika2 from '../assets/slika2.jpeg';
import Vino1 from '../assets/vino1.jpeg';
import Vino2 from '../assets/vino2.jpeg';
import Vino3 from '../assets/vino3.jpeg';
import Rakija from '../assets/rakija.jpeg';
import Brasno from '../assets/brasno.jpeg';
import Brasno2 from '../assets/brasno2.jpeg';
import Brasno3 from '../assets/brasno3.jpeg';
import Malina from '../assets/malina.jpeg';
import Rakija2 from '../assets/rakija2.jpeg';
import Suvenir from '../assets/suvenir.jpeg';
import Med1 from '../assets/med1.jpeg';
import Med2 from '../assets/med2.jpeg';
import Med3 from '../assets/med3.jpeg';
import Med4 from '../assets/med4.jpeg';
import Med5 from '../assets/med5.jpeg';
import Slika3 from '../assets/jabuke.jpeg';
import PrvaVest from '../assets/prvavest.jpeg';
import DrugaVest from '../assets/drugavest.jpeg';
import TrecaVest from '../assets/trecavest.jpeg';
import CetvrtaVest from '../assets/cetvrtavest.jpeg';
import Ministarstvo from '../assets/ministarstvo.png';
import Eu from '../assets/eu.png';
import Eu2 from '../assets/eu2.png';
import LokalnaGrupa from '../assets/lokalnagrupa.png';
import Forum from '../assets/forum.png';
import GradCacak from '../assets/gradcacak.png';
import CacakUnija from '../assets/cacakunija.png';
import UNOps from '../assets/unops.png';


const Naslovna = () => {

    const pocetnaElementi = [
        { title: 'Dobrodosli u Moravski Market!', opis: 'Najrazlicitija ponuda proizvoda lokalnih proizvodjaca!', slika: Slika1 },
        { title: 'Distributivni centar', opis: 'Preuzmite porucene proizvode, sve na jednom mestu!', slika: Slika2 }
    ]

    const pocetnaElementi2 = [
        { slika: Brasno, vrsta: 'Zitarice i testa', proizvodjac: 'Gazdinstvo Nikolic', naziv: 'Belo projino brasno od osmaka 1kg', cena: '195' + ' RSD' },
        { slika: Vino1, vrsta: 'Vina', proizvodjac: 'Vinarija Tomić - Rošci', naziv: "Vino L'ame - Pino noar 700ml", cena: '1195' + ' RSD' },
        { slika: Vino2, vrsta: 'Vina', proizvodjac: 'Vinarija Tomić - Rošci', naziv: 'Vino tete - Chardonay 700ml', cena: '1195' + ' RSD' },
        { slika: Vino3, vrsta: 'Vina', proizvodjac: 'Vinarija Tomić - Rošci', naziv: 'Vino Igra 650 - Tamjanika 700ml', cena: '1195' + ' RSD' },
        { slika: Rakija, vrsta: 'Rakije', proizvodjac: 'Destilerija Zimonjić - Goračići', naziv: 'Majkica šljivovica 500ml', cena: '1595' + ' RSD' },
    ]

    const pocetnaElementi3 = [
        { slika: Suvenir, vrsta: 'Suveniri', proizvodjac: 'Nam nam suveniri PR Ana Tutunović - Čačak', naziv: 'Čokanj suvenir 1/1', cena: '200' + ' RSD' },
        { slika: Rakija2, vrsta: 'Rakije', proizvodjac: 'Žubor sa Kablara - PR Mladen Jovašević - Čačak', naziv: 'Žubor sa Kablara prepečenica 0,75l', cena: '3275' + ' RSD' },
        { slika: Brasno2, vrsta: 'Zitarice i testa', proizvodjac: 'Poljoprivredno gazdinstvo Marić', naziv: 'Belo projino brašno 1kg', cena: '250' + ' RSD' },
        { slika: Malina, vrsta: 'Sokovi i voćni sirupi', proizvodjac: 'Šumadinka food doo', naziv: 'Sok od maline sa medom 0,2', cena: '200' + ' RSD' },
        { slika: Brasno3, vrsta: 'Zitarice i testa', proizvodjac: 'Poljoprivredno gazdinstvo Marić', naziv: 'Crveno projino brašno', cena: '375' + ' RSD' },
    ]

    const pocetnaElementi4 = [
        { slika: Med1, vrsta: 'Pčelarski proizvodi', proizvodjac: 'Poljoprivredno gazdinstvo Munitlaković', naziv: 'Imuno med 300g', cena: '890' + ' RSD' },
        { slika: Med2, vrsta: 'Pčelarski proizvodi', proizvodjac: 'Poljoprivredno gazdinstvo Munitlaković', naziv: 'Imuno med za decu 300g', cena: '990' + ' RSD' },
        { slika: Med3, vrsta: 'Pčelarski proizvodi', proizvodjac: 'Poljoprivredno gazdinstvo Marjan Gojković', naziv: 'Med-djumbir 500g', cena: '875' + ' RSD' },
        { slika: Med4, vrsta: 'Pčelarski proizvodi', proizvodjac: 'Poljoprivredno gazdinstvo Munitlaković', naziv: 'Krem med sa malinom 300g', cena: '590' + ' RSD' },
        { slika: Med5, vrsta: 'Pčelarski proizvodi', proizvodjac: 'Poljoprivredno gazdinstvo Marjan Gojković', naziv: 'Med-mleč 500g', cena: '1125' + ' RSD' },
    ]

    const pocetnaElementi5 = [
        { slika: PrvaVest, datum: '19. Oct 2024.', naslov: 'Održan II "Local food fest" 15.10.2024.' },
        { slika: DrugaVest, datum: '27. Feb 2023.', naslov: 'Završna konferencija projekta "Podrška lokalnom malom biznisu"' },
        { slika: TrecaVest, datum: '16. Feb 2023.', naslov: 'Održan prvi "Local food fest" 03.02.2023.' },
        { slika: CetvrtaVest, datum: '04. Jan 2023.', naslov: 'Naše veliko otvaranje distributivnog centra' },
    ]

    const sponzori = [
        { slika: Ministarstvo, alt: 'Ministarstvo poljoprivrede, šumarstva i vodoprivrede' },
        { slika: Eu, alt: 'Evropska unija' },
        { slika: Eu2, alt: 'Evropska unija' },
        { slika: LokalnaGrupa, alt: 'Lokalna akcijska grupa "Morava"' },
        { slika: Forum, alt: 'Forum za razvoj poljoprivrede i sela' },
        { slika: GradCacak, alt: 'Grad Čačak' },
        { slika: CacakUnija, alt: 'Udruženje "Unija Čačak 2000"' },
        { slika: UNOps, alt: 'UNOPS' }
    ]

    return (
        <div>
            <div className='content1roditelj'>
                {pocetnaElementi.map((item, index) => (
                    <button style={{ backgroundImage: `url(${item.slika})`, backgroundSize: 'cover' }} className='kartica'>
                        <div className='tekst' key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.opis}</p>
                        </div>
                    </button>
                ))
                }
            </div >
            <div className='content2roditelj'>
                <h2>Dobrodošli u Moravski market - Oazu lokalnih proizvoda!</h2>
                <p>Kod nas možete poručiti prehrambene i srodne proizvode lokalnih proizvođača, mikro, malih i srednjih preduzeća, preduzetnika
                    i registrovanih poljoprivrednih gazdinstava sa područja Čačka, Gornjeg Milanovca i Lučana.</p>
                <p>Mi smo Udruženje - partnerstvo za ruralni razvoj, a jedan od ciljeva nam je da na jednom mestu okupimo, predstavimo, promovišemo i unapredimo prodaju lokalnih proizvođača - prerađivača zdrave domaće hrane, da motivišemo sve nas kao deo lokalne zajednice, kako fizička, tako i pravna lica, da više kupujemo i konzumiramo zdrave lokalne i domaće proizvode i time utičemo na opstanak i razvoj naših lokalnih proizvođača zdrave domaće hrane.</p>
                <h3>Podrži lokalno, podrži zdravo, podrži domaće!</h3>
            </div>
            <div className='content3roditelj'>
                <div>
                    <h2>Kupuj lokalno, da komšiji krava bude živa i zdrava!</h2>
                    <p>Izdvajamo za vas zdrave i kvalitetne domaće proizvode!</p>
                </div>
                <div className='karticeroditelj'>
                    {pocetnaElementi2.map((item, index) => (
                        <div key={index} className='kartica2'>
                            <div className='opis'>
                                <img src={item.slika} alt={item.naziv} className='slikaproizvodakartica' />
                                <div className='vrstaiproizvodjacproizvodakartica'>
                                    <p>{item.vrsta}</p>
                                    <p> - {item.proizvodjac}</p>
                                </div>
                                <h4 className='nazivproizvodakartica'>{item.naziv}</h4>
                                <p className='cenaproizvodakartica'>{item.cena}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='content4roditelj'>
                <h2>Najprodavaniji artikli</h2>
                <div className='karticeroditelj'>
                    {pocetnaElementi3.map((item, index) => (
                        <div key={index} className='kartica2'>
                            <div className='opis'>
                                <img src={item.slika} alt={item.naziv} className='slikaproizvodakartica' />
                                <div className='vrstaiproizvodjacproizvodakartica'>
                                    <p>{item.vrsta}</p>
                                    <p> - {item.proizvodjac}</p>
                                </div>
                                <h4 className='nazivproizvodakartica'>{item.naziv}</h4>
                                <p className='cenaproizvodakartica'>{item.cena}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='content5roditelj'>
                <div>
                    <h2>Pčelarski proizvodi</h2>
                    <p>Prirodni pčelinji proizvodi sa dugom tradicijom</p>
                </div>
                <div className='karticeroditelj'>
                    {pocetnaElementi4.map((item, index) => (
                        <div key={index} className='kartica2'>
                            <div className='opis'>
                                <img src={item.slika} alt={item.naziv} className='slikaproizvodakartica' />
                                <div className='vrstaiproizvodjacproizvodakartica'>
                                    <p>{item.vrsta}</p>
                                    <p> - {item.proizvodjac}</p>
                                </div>
                                <h4 className='nazivproizvodakartica'>{item.naziv}</h4>
                                <p className='cenaproizvodakartica'>{item.cena}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='content6roditelj'>
                <button className='dugackoDugme'>
                    <div className='tekst2'>
                        <h2>Zelite da prodajete online?</h2>
                        <p>Uvecajte vase prihode pristupanjem nasoj mrezi prodavaca na siguran i transparentan nacin.</p>
                        <p className='saznajVise'>SAZNAJ VISE</p>
                    </div>
                </button>
            </div>
            <div className='content7roditelj'>
                <div>
                    <h2>Novosti</h2>
                    <p>Budite u toku sa dešavanjima na Moravskom Marketu.</p>
                </div>
                <div className='karticeroditelj'>
                    {pocetnaElementi5.map((item, index) => (
                        <button style={{ backgroundImage: `url(${item.slika})`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={index} className='kartica3'>
                            <div className='opis2'>
                                <p className='datum'>{item.datum}</p>
                                <h2 className='naslov'>{item.naslov}</h2>
                            </div>
                        </button>
                    ))}
                </div>
            </div >
            <div className='content8roditelj'>
                <div>
                    <h2>Realizatori inicijative</h2>
                    <p>Organizacije i udruženja koja sprovode i finansiraju projekat</p>
                </div>
                <div className='sponzori'>
                    {sponzori.map((item, index) => (
                        <div key={index} className='sponzor'>
                            <img src={item.slika} alt={item.alt} className='sponzor-slika' />
                        </div>
                    ))}
                    <p>
                        Izradu ovog web shopa finansirala je Evropska unija u partnerstvu sa Vladom Republike Srbije, preko programa EU PRO Plus.
                        Sadržaj stranice je isključiva odgovornost Udruženja "Unija Čačak 2000" i ni na koji način ne odražava stavove Evropske unije.
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Naslovna; 