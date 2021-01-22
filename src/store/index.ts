import { createStore } from 'vuex';

import airlines from '@/store/airlines';
import passengers from '@/store/passengers';

export default createStore({
	modules: {
		passengers,
		airlines
	}
});
