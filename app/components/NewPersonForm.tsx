import { useEffect, useState, MouseEvent } from 'react';
import {
	CreateGroup,
	FormHeaderProps,
	FormInputProps,
	GroupMember,
	MemberDataProps,
	ModalProps,
} from './NewGroup';
import FormHeader from './formElement/FormHeader';
import FormInput from './formElement/FormInput';
import { useModalContext } from '../context/ModalContext';
import ModalForm from './formElement/ModalForm';

function NewPersonForm({
	currentPage,
	prevStep,
	nextStep,
	setInput,
	text,
	groupMember,
	addGroupMember,
	deleteGroupMember,
	changeMemberName,
}: FormInputProps & FormHeaderProps<CreateGroup> & MemberDataProps) {
	const [currentInput, setCurrentInput] = useState(text);
	const [selectMember, setSelectMember] = useState('');
	const { hasDialog, onPutDialog, onCloseModal, onCancelDialog, onPutModal } =
		useModalContext();

	useEffect(() => {
		if (!hasDialog) {
			setSelectMember('');
		}
	}, [hasDialog]);

	const handleInputChange = (input: string) => {
		setInput(input);
		setCurrentInput(input);
	};
	const handleMemberClick = (member: GroupMember) => {
		setSelectMember(member.id);
		onPutDialog();
	};

	const handleAddClick = () => {
		addGroupMember(currentInput);
		setInput('');
		setCurrentInput('');
	};

	const handleChangePersonName = (updated: GroupMember) => {
		console.log('updated', updated.name);
		changeMemberName(updated);
		onCloseModal();
	};

	const makeModalFormElement = (person: GroupMember) => {
		return (
			<ModalForm
				onCancel={onCloseModal}
				onSubmit={handleChangePersonName}
				title='Change name'
				person={person}
			/>
		);
	};

	return (
		<>
			<FormHeader
				textForNext={currentInput ? 'Add' : 'CREATE'}
				nextCallback={currentInput ? handleAddClick : nextStep}
				prevCallback={() => prevStep((currentPage -= 1))}
			/>

			<main className='formContainer'>
				<div className='relative'>
					<FormInput
						onGroupMemberChanged={groupMember.length}
						text={text}
						update={handleInputChange}
						placeholder='New person'
					/>
					{currentInput && (
						<input
							onClick={handleAddClick}
							className='formInput cursor-pointer absolute left-0 top-16 z-50 '
							readOnly
							value={currentInput}
						/>
					)}
				</div>
				<ul className='p-2 text-white'>
					{groupMember.map(person => (
						<div key={person.id} className='relative'>
							<li
								onClick={() => handleMemberClick(person)}
								className='p-2 cursor-pointer'
							>
								{person.name}
							</li>
							<hr className='opacity-50 my-1' />
							{selectMember === person.id && (
								<ul className='absolute cursor-pointer space-y-6 w-48 left-0 -bottom-24 bg-white text-black p-3 z-40 shadow-lg rounded-sm'>
									<li onClick={() => onPutModal(makeModalFormElement(person))}>
										Change name
									</li>
									<li onClick={() => deleteGroupMember(person.id)} className=''>
										Delete
									</li>
								</ul>
							)}
						</div>
					))}
				</ul>
			</main>
		</>
	);
}

export default NewPersonForm;
