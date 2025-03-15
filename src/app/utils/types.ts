interface SvgProp {
	svg: string;
}

export interface HeaderCssProps extends SvgProp {
	nav: string;
	ul: string;
	head: string;
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
