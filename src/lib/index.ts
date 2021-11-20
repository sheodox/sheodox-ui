/// <reference types="svelte" />
/// <reference types="sass" />
import { createAutoExpireToast, createPersistentToast, createProgressToast, updateToast, clearToast } from './toast';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - bundlers knows how to import this, but typescript doesn't
// and the side effect of importing is all that matters
import styles from './style.scss';

import Modal from './Modal.svelte';
import Icon from './Icon.svelte';
import Header from './Header.svelte';
import Checkbox from './Checkbox.svelte';
import Progress from './Progress.svelte';
import Footer from './Footer.svelte';
import DropdownMenu from './DropdownMenu.svelte';
import NavDropdown from './NavDropdown.svelte';
import MenuButton from './MenuButton.svelte';
import Loading from './Loading.svelte';
import Portal from './Portal.svelte';
import TextInput from './TextInput.svelte';
import TabList from './TabList.svelte';
import Tab from './Tab.svelte';
//not exporting Toast, it's internal
import Toasts from './Toasts.svelte';

export {
	styles,
	Modal,
	Icon,
	Header,
	Checkbox,
	Progress,
	Footer,
	DropdownMenu,
	NavDropdown,
	MenuButton,
	Loading,
	Portal,
	TextInput,
	TabList,
	Tab,
	Toasts,
	createAutoExpireToast,
	createPersistentToast,
	createProgressToast,
	updateToast,
	clearToast,
};
