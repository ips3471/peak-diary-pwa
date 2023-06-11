import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { GetFocus } from '../NewGroup';

interface FormInputProps {
	text: string;
	placeholder: string;
	update: (text: string) => void;
	onGroupMemberChanged: number | null;
}

function FormInput({
	update,
	text,
	placeholder,
	onGroupMemberChanged,
}: FormInputProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		inputRef.current?.focus();
	}, [onGroupMemberChanged]);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		update(value);
	};
	return (
		<input
			ref={inputRef}
			type='text'
			value={text}
			onChange={handleChange}
			className='formInput'
			placeholder={placeholder}
			autoComplete='disable'
		/>
	);
}

export default FormInput;
