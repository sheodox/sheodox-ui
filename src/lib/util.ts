import { tick } from 'svelte';

let idBase = 0;

export const genId = () => {
	return `sx-gen-id-${idBase++}`;
};

export const focus = (element: HTMLElement) => {
	tick().then(() => {
		element.focus();
	});
};

export const sidebarAssumeMobilePx = 800;
