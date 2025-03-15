'use client';
import { JSX } from 'react';
import Header from '../components/Header';
import {
	FaCocktail,
	FaYoutube,
	FaInstagram,
	FaBandcamp,
	FaFacebook,
	FaSpotify,
} from 'react-icons/fa';
import { SocialCssProps } from '../utils/types';

const css: SocialCssProps = {
	svg: 'inline w-7 h-7 align-middle',
	li: 'pt-[15px] pb-[15px] w-[50%] inline-block',
	h1Svg: 'align-middle inline-block mr-[7px]',
};

const Socials = (): JSX.Element => {
	return (
		<div id='socialsBg'>
			<Header />
			<div className='pageCard'>
				<h1>
					<FaCocktail className={css.h1Svg} /> Socials :: Yes, we`re
					hip
				</h1>
				<br />
				Feel free to check out some of our tunes.
				<ul className='socialsUl'>
					<li className={css.li}>
						<FaFacebook className={css.svg} />
						&nbsp;
						<a
							href='https://www.facebook.com/cruisertherockband'
							target='_blank'
							className='link'
						>
							Facebook
						</a>
					</li>
					<li className={css.li}>
						<FaBandcamp className={css.svg} />
						&nbsp;
						<a
							href='https://cruisertherockband.bandcamp.com'
							target='_blank'
							className='link'
						>
							Bandcamp
						</a>
					</li>
					<li className={css.li}>
						<FaInstagram className={css.svg} />
						&nbsp;
						<a
							href='https://www.instagram.com/cruisertherockband'
							target='_blank'
							className='link'
						>
							Instagram
						</a>
					</li>
					<li className={css.li}>
						<FaYoutube className={css.svg} />
						&nbsp;
						<a
							href='https://www.youtube.com/@cruisertherockband8830'
							target='_blank'
							className='link'
						>
							YouTube
						</a>
					</li>
					<li className={css.li}>
						<FaSpotify className={css.svg} />
						&nbsp;
						<a
							href='https://open.spotify.com/artist/5zYwADqi0cJ5B1f36y8kAB'
							target='_blank'
							className='link'
						>
							Spotify
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Socials;
