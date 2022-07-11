let idBase = 0;

export const genId = () => {
	return `sx-gen-id-${idBase++}`;
};
