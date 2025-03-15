'use client';
import { JSX, useState } from 'react';
import Header from '../components/Header';
import { FaCommentDots } from 'react-icons/fa';
import { ContactCssProps } from '../utils/types';
import { isEmailValid } from '../utils/isEmailValid';

const css: ContactCssProps = {
	label: 'w-[25%] inline-block text-right pr-[20px]',
	input: 'bg-white shadow appearance-none border-[1px] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
	button: 'bg-[#ffb913bf] hover:bg-[#ffb91380] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer',
	buttonDiv: 'text-right pt-[50px]',
	h1Svg: 'align-middle inline-block mr-[7px]',
};

const Contact = (): JSX.Element => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [mailTo, setMailTo] = useState<string>('duff_beer_corp@hotmail.com');

	if (process.env && process.env.NODE_ENV === 'production')
		setMailTo('cruisertherockband@outlook.com');

	const crlf = '\r\n';
	let formAction: string = `mailto:${mailTo}`;
	formAction += `?subject=Hey Cruiser!`;
	formAction += `&body=${message}`;
	formAction += `${crlf.repeat(2)}Cheers,${crlf}${name}`;
	formAction += `${crlf}${email}`;

	return (
		<div id='contactBg'>
			<Header />
			<div className='pageCard'>
				<h1>
					<FaCommentDots className={css.h1Svg} /> Contact :: Give us a
					shout
				</h1>
				<br />
				<form
					action={encodeURI(formAction)}
					method='post'
					encType='application/x-www-form-urlencoded'
				>
					<label htmlFor='name' className={css.label}>
						Name:
					</label>
					<input
						id='name'
						type='text'
						size={50}
						className={`${css.input} ${
							name.trim().length === 0 ? 'border-[#fe1504]' : ''
						}`}
						defaultValue={name}
						onChange={(evt) => {
							setName(evt.target.value.trim());
						}}
					/>
					<br />
					<br />
					<label htmlFor='email' className={css.label}>
						Email:
					</label>
					<input
						id='email'
						type='text'
						size={50}
						className={`${css.input} ${
							isEmailValid(email) ? '' : 'border-[#fe1504]'
						}`}
						defaultValue={email}
						onChange={(evt) => {
							const _email: string = evt.target.value.trim();
							setEmail(isEmailValid(_email) ? _email : '');
						}}
					/>
					<br />
					<br />
					<label
						htmlFor='message'
						className={`${css.label} align-top`}
					>
						Message:
					</label>
					<textarea
						id='message'
						cols={52}
						rows={5}
						className={`${css.input} ${
							message.trim().length === 0
								? 'border-[#fe1504]'
								: ''
						}`}
						defaultValue={message}
						onChange={(evt) => {
							setMessage(evt.target.value.trim());
						}}
					></textarea>

					<div className={css.buttonDiv}>
						<button
							type='submit'
							className={css.button}
							disabled={name && email && message ? false : true}
						>
							Send It
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
