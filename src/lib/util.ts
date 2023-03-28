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
		const offsets = {
			x: e.offsetX,
			y: e.offsetY,
		};
		// initiated by keyboard if coordinates are 0,0
		// we need to center the ripple
		if (offsets.x === 0 && offsets.y === 0) {
			offsets.x = element.offsetWidth / 2;
			offsets.y = element.offsetHeight / 2;
		}

		const r = document.createElement('div'),
			x = offsets.x,
			y = offsets.y;
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

const animatingStyles = {
		overflow: 'hidden',
	},
	notAnimatingStyles = {
		overflow: 'hidden',
	},
	awaitAnimate = (element: HTMLElement, transitions: Keyframe[]) => {
		return new Promise((resolve) => {
			element
				.animate(transitions, { duration: 100, easing: 'ease-in-out' })
				.addEventListener('finish', resolve, { once: true });
		});
	};
export const animateHeight = (element: HTMLElement, show: boolean) => {
	const update = async (show: boolean) => {
		element.style.display = '';
		const zeroHeight = { height: 0 },
			fullHeight = { height: `${element.offsetHeight}px` };
		Object.assign(element.style, animatingStyles);

		if (show) {
			await awaitAnimate(element, [zeroHeight, fullHeight]);
		} else {
			await awaitAnimate(element, [fullHeight, zeroHeight]);
			element.style.display = 'none';
		}
		Object.assign(element.style, notAnimatingStyles);
	};
	update(show);
	return { update };
};

export const glitch = (element: HTMLElement) => {
	const colors = ['red', 'green', 'blue'];
	const randomFrom = <T>(items: T[]): T => {
		return items[Math.floor(Math.random() * items.length)];
	};
	const maxWithin = (min: number, max: number) => {
		return min + (max - min) * Math.random();
	};
	const randomTimes = <T>(fn: () => T, min: number, max: number): T[] => {
		const times = Math.floor(Math.random() * max),
			results: T[] = [];

		for (let i = 0; i < times; i++) {
			results.push(fn());
		}
		return results;
	};

	element.addEventListener('mouseenter', async () => {
		const bleed = 5,
			numFrames = 10,
			minY = element.offsetTop,
			maxY = minY + element.offsetHeight,
			minX = element.offsetLeft,
			maxX = minX + element.offsetWidth;
		element.style.zIndex = '2';

		function genGlitch() {
			return {
				color: randomFrom(colors),
				top: maxWithin(minY - bleed, maxY + bleed),
				left: maxWithin(minX - bleed, maxX + bleed),
				height: maxWithin(1, 3),
			};
		}

		const frames: ReturnType<typeof genGlitch>[][] = [];
		for (let i = 0; i < numFrames; i++) {
			frames.push(randomTimes(genGlitch, 0, 7));
		}
		let frameIndex = 0;

		const glitchDivs: HTMLElement[] = [];
		const showGlitch = () => {
			glitchDivs.forEach((div) => div.remove());

			const effect = frames[frameIndex];
			effect.forEach((block) => {
				const glitchDiv = document.createElement('div');
				glitchDivs.push(glitchDiv);

				Object.assign(glitchDiv.style, {
					zIndex: '3',
					top: block.top + 'px',
					left: block.left + 'px',
					height: block.height + 'px',
					width: '20px',
					transform: 'translateX(-50%)',
					position: 'absolute',
					display: 'block',
					backgroundColor: `var(--sx-${block.color}-500)`,
					pointerEvents: 'none',
				});
				document.body.appendChild(glitchDiv);
			});

			frameIndex++;
			if (frameIndex < frames.length) {
				requestAnimationFrame(showGlitch);
			} else {
				glitchDivs.forEach((div) => div.remove());
			}
		};
		showGlitch();
	});
};
