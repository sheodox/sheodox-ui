const toastUtils = require('./components/toast');

module.exports = {
	Modal: require('./components/Modal.svelte').default,
	Icon: require('./components/Icon.svelte').default,
	Header: require('./components/Header.svelte').default,
	Progress: require('./components/Progress.svelte').default,
	Footer: require('./components/Footer.svelte').default,
	DropdownMenu: require('./components/DropdownMenu.svelte').default,
	NavDropdown: require('./components/NavDropdown.svelte').default,
	ButtonDropdown: require('./components/ButtonDropdown.svelte').default,
	Loading: require('./components/Loading.svelte').default,
	//not exporting Toast, it's internal
	Toasts: require('./components/Toasts.svelte').default,
	//expose only public toast methods
	createAutoExpireToast: toastUtils.createAutoExpireToast,
	createPersistentToast: toastUtils.createPersistentToast,
	clearToast: toastUtils.clearToast,
};