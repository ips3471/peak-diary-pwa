import { useState } from 'react';
import {
	FormHeaderProps,
	FormInputProps,
	MovePage,
	NewGroupProps,
} from './NewGroup';
import FormHeader from './formElement/FormHeader';
import FormInput from './formElement/FormInput';

function NewNameForm({
	currentPage,
	nextStep,
	prevStep,
	setInput,
	text,
}: FormInputProps & FormHeaderProps<MovePage>) {
	// const handleChange = (name: string, text: string) => {
	// 	setText(text);
	// 	updateData(name, text);
	// };

	return (
		<>
			<FormHeader
				textForNext='NEXT'
				nextCallback={() => nextStep((currentPage += 1))}
				prevCallback={() => prevStep((currentPage -= 1))}
			/>
			<main className='formContainer'>
				<FormInput
					onGroupMemberChanged={null}
					text={text}
					update={setInput}
					placeholder='Name'
				/>
			</main>
		</>
	);
}

export default NewNameForm;
