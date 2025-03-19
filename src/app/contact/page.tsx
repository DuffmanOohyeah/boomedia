'use client';
import { JSX, useState } from 'react';
import Header from '@/components/Header';
import { FaCommentDots } from 'react-icons/fa';
import { ContactCssProps /*, ContactFormProps*/ } from '@/utils/types';
import { isEmailValid } from '@/utils/isEmailValid';
import Footer from '@/components/Footer';

const css: ContactCssProps = {
	label: 'w-[25%] inline-block text-right pr-[20px]',
	input: 'bg-white shadow appearance-none border-[1px] rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
	button: 'bg-(--color-gold-light) hover:bg-(--color-gold-dark) py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer',
	buttonDiv: 'text-right pt-[50px]',
	h1Svg: 'align-middle inline-block mr-[7px]',
};

/*const getFormAction = ({ name, email, message }: ContactFormProps): string => {
	let mailTo: string = 'duff_beer_corp@hotmail.com';
	if (process.env.NODE_ENV === 'production')
		mailTo = 'cruisertherockband@outlook.com';
	const crlf = '\r\n';
	let formAction: string = `mailto:${mailTo}`;
	formAction += `?subject=Hey Cruiser!`;
	formAction += `&body=${message}`;
	formAction += `${crlf.repeat(2)}Cheers,${crlf}${name}`;
	formAction += `${crlf}${email}`;
	return encodeURI(formAction);
};*/

const Contact = (): JSX.Element => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	/*const formArgs: ContactFormProps = {
		name: name,
		email: email,
		message: message,
	};*/

	return (
		<div id='contactBg' className='pageBg'>
			<Header />
			<div className='pageCard w-[90%] md:w-[70%] lg:w-[50%]'>
				<h1>
					<FaCommentDots className={css.h1Svg} /> Contact :: Give us a
					shout
				</h1>
				<br />
				<form
					/*action={getFormAction({ ...formArgs })}
					method='post'
					encType='application/x-www-form-urlencoded'*/
					data-netlify
				>
					<label htmlFor='name' className={css.label}>
						Name:
					</label>
					<input
						id='name'
						type='text'
						size={40}
						className={`${css.input} ${
							name.trim().length === 0
								? 'border-(--color-red-light)'
								: ''
						}`}
						defaultValue={name}
						onChange={(evt) => {
							setName(evt.target.value.trim());
						}}
					/>
					{!name ? (
						<>
							<br />
							<div className='max-w-[90%] md:max-w-[85%] lg:max-w-[88%] xl:max-w-[80%] 2xl:max-w-[70%] text-(--color-red-light) text-right text-sm'>
								Name required.
							</div>
						</>
					) : (
						<br />
					)}
					<br />
					<label htmlFor='email' className={css.label}>
						Email:
					</label>
					<input
						id='email'
						type='text'
						size={40}
						className={`${css.input} ${
							isEmailValid(email)
								? ''
								: 'border-(--color-red-light)'
						}`}
						defaultValue={email}
						onChange={(evt) => {
							const _email: string = evt.target.value.trim();
							setEmail(isEmailValid(_email) ? _email : '');
						}}
					/>
					{!email ? (
						<>
							<br />
							<div className='max-w-[90%] md:max-w-[85%] lg:max-w-[88%] xl:max-w-[80%] 2xl:max-w-[70%] text-(--color-red-light) text-right text-sm'>
								Valid email required.
							</div>
						</>
					) : (
						<br />
					)}
					<br />
					<label
						htmlFor='message'
						className={`${css.label} align-top`}
					>
						Message:
					</label>
					<textarea
						id='message'
						cols={44}
						rows={5}
						className={`${css.input} ${
							message.trim().length === 0
								? 'border-(--color-red-light)'
								: ''
						}`}
						defaultValue={message}
						onChange={(evt) => {
							setMessage(evt.target.value.trim());
						}}
					></textarea>
					{!message && (
						<>
							<br />
							<div className='max-w-[90%] md:max-w-[85%] lg:max-w-[88%] xl:max-w-[80%] 2xl:max-w-[70%] text-(--color-red-light) text-right text-sm'>
								Message required.
							</div>
						</>
					)}

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
			<Footer />
		</div>
	);
};

export default Contact;
