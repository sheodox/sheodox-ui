import * as toastUtils from './components/toast';

export {default as styles} from './style.scss';
export {default as Modal} from './components/Modal.svelte';
export {default as Icon} from './components/Icon.svelte';
export {default as Header} from './components/Header.svelte';
export {default as Checkbox} from './components/Checkbox.svelte';
export {default as Progress} from './components/Progress.svelte';
export {default as Footer} from './components/Footer.svelte';
export {default as DropdownMenu} from './components/DropdownMenu.svelte';
export {default as NavDropdown} from './components/NavDropdown.svelte';
export {default as MenuButton} from './components/MenuButton.svelte';
export {default as ButtonDropdown} from './components/ButtonDropdown.svelte';
export {default as Loading} from './components/Loading.svelte';
export {default as Portal} from './components/Portal.svelte';
export {default as TextInput} from './components/TextInput.svelte';
export {default as TabList} from './components/TabList.svelte';
export {default as Tab} from './components/Tab.svelte';
//not exporting Toast, it's internal
export {default as Toasts} from './components/Toasts.svelte';
//expose only public toast methods
export const createAutoExpireToast = toastUtils.createAutoExpireToast;
export const createPersistentToast = toastUtils.createPersistentToast;
export const createProgressToast = toastUtils.createProgressToast;
export const updateToast = toastUtils.updateToast;
export const clearToast = toastUtils.clearToast;