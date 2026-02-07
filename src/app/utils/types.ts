import { JSX } from 'react';

interface SvgProp {
	svg: string;
}

export interface HeaderCssProps extends SvgProp {
	nav: string;
	ul: string;
	head: string;
	divider: string;
}

export interface FooterCssProps extends SvgProp {
	tag: string;
}

export interface HomeCssProps {
	logo: string;
}

export interface TesimonialCssProps extends SvgProp {
	nb: string;
	thx: string;
	h1Svg: string;
}

export interface ContactCssProps {
	label: string;
	input: string;
	button: string;
	buttonDiv: string;
	h1Svg: string;
}

export interface SocialCssProps extends SvgProp {
	li: string;
	h1Svg: string;
}

export interface MusicCssProps extends SvgProp {
	h1Svg: string;
	li: string;
}

export interface GigCssProps {
	h1Svg: string;
}

export interface PicCssProps {
	h1Svg: string;
	wrap: string;
}

export interface EmbedVideoProps {
	id: string;
	label?: string;
	h?: number;
	w?: number;
}

export interface EmbedAudioProps {
	id: string;
	label: string;
	dir: string;
}

export interface FbVideoProps {
	link: string;
	label: string;
	height?: number;
	width: number;
}

export interface ContactFormProps {
	name: string;
	email: string;
	message: string;
}

export interface SocialHubProps {
	svg: JSX.Element;
	href: string;
	label: string;
}

export interface GalleryClassProps {
	originalClass: string;
	thumbnailClass: string;
}

export interface NavBlockCssProps {
	path: string;
	isSticky?: boolean;
}

export interface StickyCssProps extends SvgProp {
	sticky: string;
}

export interface HandleContactChangeProps {
	target: { id: string; value: string };
}

export interface NavLinksProps {
	href: string;
	label: string | number;
}

export interface ListingsYear {
	year: number | string;
}

export interface ListingsProps extends ListingsYear {
	venue: string;
	month?: string;
	location: string;
	notes?: string;
}
