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

export const ripple = (element: HTMLElement) => {
	element.classList.add('sx-has-ripple');
	function spawnRipple(e: MouseEvent) {
		const r = document.createElement('div'),
			x = e.offsetX,
			y = e.offsetY;
		r.classList.add('sx-button-ripple');
		r.setAttribute('style', `--x: ${x}px; --y: ${y}px;`);
		element.prepend(r);
		setTimeout(() => {
			r.remove();
		}, 500);
	}
	element.addEventListener('click', spawnRipple);
	return {
		destroy: () => {
			element.removeEventListener('click', spawnRipple);
		},
	};
};

export const sidebarAssumeMobilePx = 800;
