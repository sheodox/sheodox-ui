export function expectProperties(componentName: string, propMap: Record<string, any>) {
	for (const [name, value] of propMap.entries()) {
		if (typeof value === 'undefined') {
			throw new Error(`Expected property "${name}" to be passed to ${componentName} component.`);
		}
	}
}
