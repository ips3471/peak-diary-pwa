'use client';

import { ReactNode, useState } from 'react';
import Welcome from './Welcome';
import NewNameForm from './NewNameForm';
import NewPersonForm from './NewPersonForm';
import { v4 as uuid } from 'uuid';
import { useModalContext } from '../context/ModalContext';

export type UpdateFormData<T> = (name: string, value: T) => void;
export type MovePage = (page: number) => void;
export interface NewGroupProps<T> {
	page: number;
	setPage: MovePage;
	data: T;
	updateData: UpdateFormData<T>;
}
export interface FormInputProps {
	text: string;
	setInput: (text: string) => void;
}
export interface MemberDataProps {
	groupMember: GroupMember[];
	addGroupMember: (person: string) => void;
	deleteGroupMember: (person: string) => void;
	changeMemberName: (person: GroupMember) => void;
}
export interface ModalProps {
	onCancelModal: () => void;
	onPutModal: (element: ReactNode) => void;
}
export interface FormHeaderProps<T extends FormNextStep> {
	currentPage: number;
	nextStep: T;
	prevStep: (page: number) => void;
}
export type FormNextStep = MovePage | CreateGroup;
export type CreateGroup = () => void;
type NewGroupForm = {
	name: string;
	person: string[];
};
export type NewMemberForm = {
	text: string;
	members: string[];
};
export type GroupMember = {
	id: string;
	name: string;
};
export type GetFocus = (ref: HTMLInputElement) => void;

function NewGroup({}) {
	const [page, setPage] = useState(0);
	const [groupName, setGroupName] = useState<string>('');
	const [personName, setPersonName] = useState<string>('');
	const [groupMembers, setGroupMembers] = useState<GroupMember[]>([]);
	const { hasDialog, onCancelDialog } = useModalContext();
	const [hasModal, setHasModal] = useState(true);

	const addGroupMember = (person: string) => {
		const id = uuid();
		setGroupMembers(prev => [...prev, { id, name: person }]);
	};

	const changeMemberName = (person: GroupMember) => {
		setGroupMembers(members => {
			return members.map(member =>
				member.id === person.id ? { ...member, name: person.name } : member,
			);
		});
	};

	const deleteGroupMember = (personId: string) => {
		setGroupMembers(prev => prev.filter(member => member.id !== personId));
	};

	const handleBackgroundClick = () => {
		// console.log('current dialog state', hasDialog);

		if (!hasDialog) return;
		onCancelDialog();
	};

	const handleCreate = () => {
		console.log(groupMembers);
	};

	const pages = [
		<Welcome page={page} setPage={setPage} />,
		<NewNameForm
			prevStep={setPage}
			currentPage={page}
			nextStep={setPage}
			text={groupName}
			setInput={setGroupName}
		/>,
		<NewPersonForm
			groupMember={groupMembers}
			addGroupMember={addGroupMember}
			prevStep={setPage}
			currentPage={page}
			nextStep={handleCreate}
			text={personName}
			setInput={setPersonName}
			deleteGroupMember={deleteGroupMember}
			changeMemberName={changeMemberName}
		/>,
	];

	return (
		<div onClick={handleBackgroundClick} className='h-full p-6'>
			{pages[page]}
		</div>
	);
}

export default NewGroup;
