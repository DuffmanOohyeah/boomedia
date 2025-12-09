'use client';
import { JSX } from 'react';
import Header from '@/components/Header';
import { FaClipboardList } from 'react-icons/fa';
import { GigCssProps, NavLinksProps } from '@/utils/types';
import Link from 'next/link';
import Footer from '@/components/Footer';

const navLinks: NavLinksProps[] = [
	{ href: '#year26', label: 2026 },
	{ href: '#year25', label: 2025 },
	{ href: '#year24', label: 2024 },
	{ href: '#year23', label: 2023 },
	{ href: '#year22', label: 2022 },
	{ href: '#year21', label: 2021 },
	{ href: '#eDaze', label: 'eDaze' },
];

const css: GigCssProps = { h1Svg: 'align-middle inline-block mr-[7px]' };

const GigNav = (): JSX.Element => {
	return (
		<nav>
			{navLinks.map((obj: NavLinksProps, idx: number) => {
				return (
					<span key={obj.label}>
						<Link href={obj.href} className='link'>
							{obj.label}
						</Link>
						{idx + 1 === navLinks.length ? '' : `\u00A0 |\u00A0`}
					</span>
				);
			})}
		</nav>
	);
};

const Gigs = (): JSX.Element => {
	return (
		<div id='gigBg' className='pageBg'>
			<Header />
			<div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
				<h1>
					<FaClipboardList className={css.h1Svg} /> Gigs :: Upcoming
					&amp; Past
				</h1>

				<br />
				<GigNav />

				<a id='year26' />
				<h2>2026</h2>
				<ul className='gigsUl'>
					<li>New Cross Inn - January 2026; London UK</li>
				</ul>

				<a id='year25' />
				<h2>2025</h2>
				<ul className='gigsUl'>
					<li>
						The Beehive - July 2025; Bromley-by-Bow London UK
						(Acoustic Set)
					</li>
					<li>St James Wine Vaults - June 2025; Bath UK</li>
					<li>Priory Football Club - June 2025; Reigate UK</li>
					<li className='line-through'>
						East Street Tap - April 2025; Brighton UK
					</li>
					<li>Amersham Arms - February 2025; New Cross London UK</li>
				</ul>

				<a id='year24' />
				<h2>2024</h2>
				<ul className='gigsUl'>
					<li>
						Cart &amp; Horses - November 2024; Stratford London UK
						(The Stratford Files; EP Release Party)
					</li>
					<li>
						The Fiddler`s Elbow - June 2024; London UK (Camden
						Rocks)
					</li>
					<li>Priory Football Club - June 2024; Reigate UK</li>
					<li>The Beehive - April 2024; Bromley-by-Bow London UK</li>
				</ul>

				<a id='year23' />
				<h2>2023</h2>
				<ul className='gigsUl'>
					<li>
						St. Moritz Club - December 2023; Soho London UK (Come
						Back Rocky; EP Release Party)
					</li>
					<li>Ram Jam Records - November 2023; Kingston UK</li>
					<li>The Oval Tavern - September 2023; East Croydon UK</li>
					<li className='line-through'>
						Venture Inn - August 2023; Reigate, UK
					</li>
					<li>New Cross Inn - June 2023; London UK</li>
					<li>
						The Fiddler`s Elbow - April 2023; London UK (Camden
						Rocks)
					</li>
					<li>New Cross Inn - January 2023; London UK</li>
					<li>Hope &amp; Anchor - January 2023; London UK</li>
				</ul>

				<a id='year22' />
				<h2>2022</h2>
				<ul className='gigsUl'>
					<li>The Black Heart - October 2022; London UK</li>
					<li>
						The Queen Adelaide - September 2022; Epsom UK (Charity
						Event; Ukraine Fundraiser)
					</li>
					<li>
						The Kings Arms - April 2022; Dorking UK (Charity Event;
						Dorking Westival)
					</li>
					<li>
						The Fiddler`s Elbow - April 2022; London UK (Camden
						Rocks)
					</li>
				</ul>

				<a id='year21' />
				<h2>2021</h2>
				<ul className='gigsUl'>
					<li>
						The Star - Hallowe`en 2021; Dorking UK (Charity Event;
						Dorking Westival)
					</li>
				</ul>

				<a id='eDaze' />
				<h2>Early Daze</h2>
				<ul className='gigsUl'>
					<li>The Dublin Castle - London UK</li>
					<li>The Phoenix - London UK</li>
					<li>West 14 - London UK </li>
					<li>The Betsey Trotwood - London UK</li>
					<li>The Louisiana - Bristol UK</li>
					<li>The Fleece - Bristol UK</li>
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export default Gigs;
