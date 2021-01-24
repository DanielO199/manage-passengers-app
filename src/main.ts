import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';

import BaseButton from '@/components/BaseButton.vue';

import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(store);
app.use(router);

app
	.component('Button', Button)
	.component('DataTable', DataTable)
	.component('Column', Column)
	.component('base-button', BaseButton)
	.component('Sidebar', Sidebar)
	.component('InputText', InputText)
	.component('Dialog', Dialog);

app.mount('#app');
