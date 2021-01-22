import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import BaseButton from '@/components/BaseButton.vue';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App)
	.use(store)
	.use(router)
	.use(PrimeVue)
	.component('Button', Button)
	.component('DataTable', DataTable)
	.component('Column', Column)
	.component('base-button', BaseButton)
	.mount('#app');
// const app = createApp(App)

// app.use(router);
// app.use(store);

// app.component('base-card', BaseCard);

// app.mount('#app');
