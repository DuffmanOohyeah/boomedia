'use client';
import { JSX } from 'react';
import { EmbedAudioProps } from '../utils/types';

const audioAtts = (): EmbedAudioProps[] => {
	const atts: EmbedAudioProps[] = [
		{ id: '1196090953', label: 'Godzilla', dir: 'godzilla' },
		{ id: '507415911', label: 'Everywhere', dir: 'everywhere' },
		{ id: '507415743', label: 'Cosmonaut', dir: 'cosmonaut' },
		{ id: '507415200', label: 'Bombardier', dir: 'bombardier' },
		{ id: '507414939', label: 'Bantham', dir: 'banthem' },
		{ id: '507414783', label: 'Emily', dir: 'emily' },
		{
			id: '507414639',
			label: 'Mary Poppins',
			dir: 'mary-poppins-later-days',
		},
		{ id: '507414516', label: 'Moleskin', dir: 'moleskin' },
		{ id: '507414162', label: 'Click Click', dir: 'click-click' },
		{ id: '507414066', label: 'Killer Bees', dir: 'killer-bees' },
		{ id: '507413829', label: 'Golden Gate', dir: 'golden-gate' },
	];
	return atts;
};

const EmbedAudio = ({ id, label, dir }: EmbedAudioProps): JSX.Element => {
	const soundcloudUrl: string =
		'https://soundcloud.com/simon-spearman-743864396/';
	let frameSrc: string = 'https://w.soundcloud.com/player/';
	frameSrc += `?url=https%3A//api.soundcloud.com/tracks/${id}`;
	frameSrc += '&color=%23ff5500';
	frameSrc += '&auto_play=true';
	frameSrc += '&hide_related=false';
	frameSrc += '&show_comments=true';
	frameSrc += '&show_user=true';
	frameSrc += '&show_reposts=false';
	frameSrc += '&show_teaser=true';

	return (
		<>
			<iframe
				width='100%'
				height='166'
				loading='lazy'
				allow='autoplay'
				src={frameSrc}
				style={{ border: 'none' }}
			></iframe>
			<div
				style={{
					fontSize: '10px',
					color: '#ccc',
					lineBreak: 'anywhere',
					wordBreak: 'normal',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
					fontFamily:
						'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
					fontWeight: '100',
				}}
			>
				<a
					href={soundcloudUrl}
					title='Cruiser'
					target='_blank'
					style={{ color: '#ccc', textDecoration: 'none' }}
				>
					Cruiser
				</a>
				&nbsp;
				<a
					href={`${soundcloudUrl}${dir}`}
					title={label}
					target='_blank'
					style={{ color: '#ccc', textDecoration: 'none' }}
				>
					{label}
				</a>
			</div>
		</>
	);
};

export { audioAtts };
export default EmbedAudio;
