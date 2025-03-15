'use client';
import { JSX, useEffect, useState } from 'react';
import { Events } from 'react-scroll';
import {
	FaHome,
	FaMusic,
	FaPhotoVideo,
	FaClipboardList,
	FaRegNewspaper,
	FaCommentDots,
	FaCocktail,
} from 'react-icons/fa';
import { HeaderCssProps } from '../utils/types';
import { usePathname } from 'next/navigation';
import '../styles/header.css';

const css: HeaderCssProps = {
	svg: 'inline-block align-middle mr-[7px]',
	nav: 'flex justify-center',
	ul: 'flex list-none gap-[20px]',
	head: 'z-1',
};

const Header = (): JSX.Element => {
	const [isSticky, setIsSticky] = useState<boolean>(true);
	const path: string = usePathname();

	useEffect(() => {
		Events.scrollEvent.register('begin', () => setIsSticky(true));
		Events.scrollEvent.register('end', () => setIsSticky(false));
		return () => {
			Events.scrollEvent.remove('begin');
			Events.scrollEvent.remove('end');
		};
	}, []);

	return (
		<header className={`${css.head} ${isSticky ? 'sticky-header' : ''}`}>
			<nav className={css.nav}>
				<ul className={css.ul}>
					<li>
						<a
							href={'/'}
							className={`link ${path === '/' ? 'active' : ''}`}
						>
							<FaHome className={css.svg} />
							Home
						</a>
					</li>
					<li>|</li>
					<li>
						<a
							href={'/music'}
							className={`link ${
								path.search(/music/i) > -1 ? 'active' : ''
							}`}
						>
							<FaMusic className={css.svg} />
							Music
						</a>
					</li>
					<li>|</li>
					<li>
						<a
							href={'/pics'}
							className={`link ${
								path.search(/pics/i) > -1 ? 'active' : ''
							}`}
						>
							<FaPhotoVideo className={css.svg} />
							Pics
						</a>
					</li>
					<li>|</li>
					<li>
						<a
							href={'/gigs'}
							className={`link ${
								path.search(/gigs/i) > -1 ? 'active' : ''
							}`}
						>
							<FaClipboardList className={css.svg} />
							Gigs
						</a>
					</li>
					<li>|</li>
					<li>
						<a
							href={'/socials'}
							className={`link ${
								path.search(/socials/i) > -1 ? 'active' : ''
							}`}
						>
							<FaCocktail className={css.svg} />
							Socials
						</a>
					</li>
					<li>|</li>
					<li>
						<a
							href={'/testimonials'}
							className={`link ${
								path.search(/testimonials/i) > -1
									? 'active'
									: ''
							}`}
						>
							<FaRegNewspaper className={css.svg} />
							Testimonials
						</a>
					</li>
					<li>|</li>
					<li>
						<a
							href={'/contact'}
							className={`link ${
								path.search(/contact/i) > -1 ? 'active' : ''
							}`}
						>
							<FaCommentDots className={css.svg} />
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
