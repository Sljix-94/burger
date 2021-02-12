import React from 'react';
import classes from './Dostava.module.css';
import DostavaSingle from './DostavaSingle/DostavaSingle';
import Aux from '../../hoc/Auxilary';

const dostava =(props)=>{
	return(
		<Aux>
		<div className = {classes.Container}>
			<DostavaSingle
				title = 'Kako da narucim hranu?'
				body = {<div><p>1. Na stranici JELOVNIK odaberite proizvod koje želite da poručite</p>
					<p>2. Klikom na proizvod, otvoriće se prozor u kome možete odabrati priloge koje želite</p>
					<p>3. Nakon odabira, kliknite na dugme “UBACI U KORPU”</p>
					<p>4. Možete nastaviti kupovinu na isti način ili proveriti KORPU</p>
					<p>5. U KORPI možete otkazati odabrane proizvode ili završiti kupovinu klikom na NARUČI</p>
					<p>* Imajte na umu da nažalost NE ISPORUČUJEMO PORUDŽBINE MANJE OD 500 rsd</p>
					<p>6. Na stranici NARUČIVANJE unesite podatke za dostavu</p>
			</div>}
			/>
			<DostavaSingle
				title = 'Da li isporučujete i u moje mesto?'
				body = {
					<div>
						<p>Minimalni iznos za dostavu je 500 dinara, osim za mesta za koja je drugačije naznačeno.</p>
						<p>Porudžbine isporučujemo u sledećim mestima:</p>
						<ul>
						<li>Stari grad</li>
						<li>Dorćol</li>
						<li>Savski venac</li>
						<li>Palilula (samo uži gradski deo)</li>
						<li>Mirijevo</li>
						<li>Medaković</li>
						<li>Mali Mokri Lug</li>
						<li>Konjarnik</li>
						<li>Karaburma</li>
						<li>Zvezdara</li>
						<li>Dušanovac</li>
						<li>Vračar</li>
						<li>Voždovac</li>
						<li>Braće Jerković</li>
						<li>Stepa Stepanović (Minimum za dostavu je 800 dinara)</li>
						<li>Banjica (Minimum za dostavu je 800 dinara)</li>
						<li>Novi Beograd (Minimum za dostavu je 1,500 dinara)</li>
						<li>Zemun (Minimum za dostavu je 1,500 dinara)</li>
						<li>Senjak (Minimum za dostavu je 1,500 dinara)</li>
						<li>Banovo brdo (Minimum za dostavu je 1,500 dinara)</li>
						<li>Kotež (Minimum za dostavu je 1,000 dinara)</li>
						</ul>
					</div>}
			/>
			<DostavaSingle
				title = 'Kada će mi porudžbina biti isporučena?'
				body = {<div>
							<p>Prosečno vreme isporuke je 40 minuta i ono može da varira u zavisnosti od toga u koji deo grada vam dostavljamo porudžbinu, kao i od zauzetosti kuhinje.</p>
						</div>}
			/>
		</div>
			
		</Aux>
	)
}

export default dostava;