import { createStore } from 'vuex';

import airlines from '@/store/airlines';
import passengers from '@/store/passengers';
import auth from '@/store/auth';

export default createStore({
	modules: {
		passengers,
		auth,
		airlines
	}
});
