<div class="sx-stack {classes}">
	<slot />
</div>

<script lang="ts">
	const rowClasses = ['h', 'horizontal', 'row', 'r'] as const;
	const columnClasses = ['v', 'vertical', 'column', 'c'] as const;
	type StackDirection = (typeof rowClasses | typeof columnClasses)[number] | null;

	// explicit classes
	export let cl = '';
	export let gap = 0;
	// .align-items-?
	export let align: 'center' | 'start' | 'end' | 'baseline' | null = null;
	// .justify-content-?
	export let justify: 'center' | 'start' | 'end' | 'between' | 'around' | null = null;
	// flex direction
	export let dir: StackDirection = 'v';

	$: dirClass = dir && rowClasses.includes(dir as (typeof rowClasses)[number]) ? 'f-row' : 'f-column';
	$: gapClass = gap > 0 ? `gap-${gap}` : '';
	$: alignItemsClass = align ? `align-items-${align}` : '';
	$: justifyContentClass = justify ? `justify-content-${justify}` : '';
	$: classes = [dirClass, gapClass, alignItemsClass, justifyContentClass, cl].filter((c) => !!c).join(' ');
</script>
