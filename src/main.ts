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
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import ProgressSpinner from 'primevue/progressspinner';
import InputNumber from 'primevue/inputnumber';

import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ToastService);

app
	.component('Button', Button)
	.component('DataTable', DataTable)
	.component('Column', Column)
	.component('Sidebar', Sidebar)
	.component('InputText', InputText)
	.component('Toast', Toast)
	.component('ProgressSpinner', ProgressSpinner)
	.component('InputNumber', InputNumber)
	.component('Dialog', Dialog);

app.mount('#app');
