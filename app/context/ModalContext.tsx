'use client';

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

const ModalContext = createContext({
	hasDialog: false,
	onCancelDialog: () => {},
	onPutDialog: () => {},
	onPutModal: (element: ReactNode) => {},
	onCloseModal: () => {},
});

export function ModalContextProvider({ children }: { children: ReactNode }) {
	const [hasDialog, setHasDialog] = useState(false);
	const [hasModal, setHasModal] = useState<ReactNode | null>(null);

	const onCancelDialog = () => {
		if (!hasDialog) return;
		setHasDialog(false);
		console.log('close dialog');
	};

	const onPutDialog = () => {
		console.log('on put dialog');
		setHasDialog(true);
	};

	const onCloseModal = () => setHasModal(null);

	useEffect(() => {
		console.log('dialog state changed', hasDialog);
	}, [hasDialog]);

	return (
		<ModalContext.Provider
			value={{
				hasDialog,
				onCancelDialog,
				onPutDialog,
				onPutModal: setHasModal,
				onCloseModal,
			}}
		>
			<>
				{hasModal && (
					<div className=' fixed  top-[50%]  w-full scale-90 space-y-10 -translate-y-[50%]'>
						{hasModal}
					</div>
				)}
				<div
					className={`h-full ${
						hasModal ? 'bg-black/40 pointer-events-none' : ''
					}`}
				>
					{children}
				</div>
			</>
		</ModalContext.Provider>
	);
}

export function useModalContext() {
	return useContext(ModalContext);
}
