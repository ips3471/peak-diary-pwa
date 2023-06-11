'use client';

import { FormEvent, useRef, useState } from 'react';
import { GroupMember } from '../NewGroup';

interface ModalFormProps {
	title: string;
	onSubmit: (person: GroupMember) => void;
	onCancel: () => void;
	person: GroupMember;
}

function ModalForm({ onCancel, onSubmit, title, person }: ModalFormProps) {
	const [input, setInput] = useState<string>(person.name);
	const inputRef = useRef(null);
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit({ id: person.id, name: input });
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='bg-white p-5 text-center space-y-4'
		>
			<h2 className='text-left text-2xl'>{title}</h2>
			<div className='border-b border-b-orange-500'>
				<input
					ref={inputRef}
					type='text'
					value={input}
					spellCheck={false}
					onChange={e => setInput(e.currentTarget.value)}
					className='formInput '
					autoFocus
				/>
			</div>
			<div className='text-right space-x-10 text-orange-500'>
				<button type='button' onClick={onCancel} className='p-4'>
					CANCEL
				</button>
				<button type='submit' className='p-4'>
					OK
				</button>
			</div>
		</form>
	);
}

export default ModalForm;
