/// <reference types="svelte" />
import '../style.scss';
import DemoApp from './DemoApp.svelte';

const app = new DemoApp({
	target: document.getElementById('app-root'),
});
