import { writable } from 'svelte/store';
import { genId } from './util';

interface ModalBase {
	title: string;
}

export type AlertModal = ModalBase & {
	type: 'alert';
	message: string;
	yesPhrase?: string;
};
export type ConfirmModal = ModalBase & {
	type: 'confirm';
	message: string;
	yesPhrase?: string;
	noPhrase?: string;
};
export type PromptModal = ModalBase & {
	type: 'prompt';
	label: string;
	default?: string;
	yesPhrase?: string;
	noPhrase?: string;
};

export type Modal = AlertModal | ConfirmModal | PromptModal;

export type WrappedAlertModal = AlertModal & {
	onYes?: () => void;
};
export type WrappedConfirmModal = ConfirmModal & {
	onYes?: () => void;
	onNo?: () => void;
};
export type WrappedPromptModal = PromptModal & {
	onYes?: (value: string) => void;
	onNo?: () => void;
};

//"Wrapped" modals include internal properties, like event handlers for
//returning a value from from a show* function's returned promise
export type WrappedModal = { id: string } & (WrappedAlertModal | WrappedPromptModal | WrappedConfirmModal);

export const modals = writable<WrappedModal[]>([]);

const addModal = (m: WrappedModal) => {
	modals.update((modals) => [...modals, m]);
};

const removeModal = (id: string) => {
	modals.update((modals) => modals.filter((m) => m.id !== id));
};

export const showPromptModal = async (opts: Omit<PromptModal, 'type'>): Promise<string | null> => {
	const id = genId();

	const ok = await new Promise<string | null>((resolve) => {
		addModal({
			...opts,
			id,
			onYes: (value) => resolve(value),
			onNo: () => resolve(null),
			type: 'prompt',
		});
	});

	removeModal(id);

	return ok;
};

export const showConfirmModal = async (opts: Omit<ConfirmModal, 'type'>): Promise<boolean> => {
	const id = genId();

	const ok = await new Promise<boolean>((resolve) => {
		addModal({
			...opts,
			id,
			onYes: () => resolve(true),
			onNo: () => resolve(false),
			type: 'confirm',
		});
	});

	removeModal(id);

	return ok;
};

export const showAlertModal = async (opts: Omit<AlertModal, 'type'>): Promise<void> => {
	const id = genId();

	await new Promise<void>((resolve) => {
		addModal({
			...opts,
			id,
			onYes: () => resolve(),
			type: 'alert',
		});
	});

	removeModal(id);
};
