'use client';
import { JSX } from 'react';
import Header from '@/components/Header';
import { FaClipboardList } from 'react-icons/fa';
import { GigCssProps } from '@/utils/types';
import Link from 'next/link';
import Footer from '@/components/Footer';

const css: GigCssProps = { h1Svg: 'align-middle inline-block mr-[7px]' };

const GigNav = (): JSX.Element => {
	return (
		<nav>
			<Link href='#block6' className='link'>
				2025
			</Link>
			&nbsp; |&nbsp;
			<Link href='#block5' className='link'>
				2024
			</Link>
			&nbsp; |&nbsp;
			<Link href='#block4' className='link'>
				2023
			</Link>
			&nbsp; |&nbsp;
			<Link href='#block3' className='link'>
				2022
			</Link>
			&nbsp; |&nbsp;
			<Link href='#block2' className='link'>
				2021
			</Link>
			&nbsp; |&nbsp;
			<Link href='#block1' className='link'>
				Early Daze
			</Link>
		</nav>
	);
};

const Gigs = (): JSX.Element => {
	return (
		<div id='gigBg' className='pageBg'>
			<Header />
			<div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
				<a id='block6' />
				<h1>
					<FaClipboardList className={css.h1Svg} /> Gigs :: Upcoming
					&amp; Past
				</h1>
				<br />
				<GigNav />
				<h2>
					<a id='block5' />
					2025
				</h2>
				<ul className='gigsUl'>
					<li>East Street Tap - April 2025; Brighton, UK (TBC)</li>
					<li>
						Amersham Arms - February 2025; New Cross, London, UK
					</li>
				</ul>

				<h2>
					<a id='block4' />
					2024
				</h2>
				<ul className='gigsUl'>
					<li>
						Cart &amp; Horses - November 2024; Stratford London, UK
						(The Stratford Files; EP Release Party)
					</li>
					<li>
						The Fiddler`s Elbow - June 2024; London UK (Camden
						Rocks)
					</li>
					<li>Priory Football Club - June 2024; Reigate UK</li>
					<li>The Beehive - April 2024; Bow London UK</li>
				</ul>

				<h2>
					<a id='block3' />
					2023
				</h2>
				<ul className='gigsUl'>
					<li>
						St. Moritz Club - December 2023; Soho London, UK (Come
						Back Rocky; EP Release Party)
					</li>
					<li>Ram Jam Records - November 2023, Kingston, UK</li>
					<li>The Oval Tavern - September 2023; East Croydon, UK</li>
					<li>New Cross Inn - June 2023; London, UK</li>
					<li>
						The Fiddler`s Elbow - April 2023; London, UK (Camden
						Rocks)
					</li>
					<li>New Cross Inn - January 2023; London, UK</li>
					<li>Hope &amp; Anchor - January 2023; London, UK</li>
				</ul>

				<h2>
					<a id='block2' />
					2022
				</h2>
				<ul className='gigsUl'>
					<li>The Black Heart - October 2022; London, UK</li>
					<li>
						The Queen Adelaide - September 2022; Epsom, UK (Charity
						Event; Ukraine Fundraiser)
					</li>
					<li>
						The Kings Arms - April 2022; Dorking, UK (Charity Event;
						Dorking Westival)
					</li>
					<li>
						The Fiddler`s Elbow - April 2022; London, UK (Camden
						Rocks)
					</li>
				</ul>

				<h2>
					<a id='block1' />
					2021
				</h2>
				<ul className='gigsUl'>
					<li>
						The Star - Hallowe`en 2021; Dorking, UK (Charity Event;
						Dorking Westival)
					</li>
				</ul>

				<h2>Early Daze</h2>
				<ul className='gigsUl'>
					<li>The Dublin Castle - London, UK</li>
					<li>The Phoenix - London, UK</li>
					<li>West 14 - London, UK </li>
					<li>The Betsey Trotwood - London, UK</li>
					<li>The Louisiana - Bristol, UK</li>
					<li>The Fleece - Bristol, UK</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export default Gigs;
