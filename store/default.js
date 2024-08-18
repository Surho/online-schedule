import {defineStore} from 'pinia';
import {useFetch} from 'nuxt/app';
import {daysWeek} from '@/constants/index.js';

export const useDefaultStore = defineStore('default', {
  state: () => ({
    schedule: null,
    status: null,
  }),
  getters: {
    getSchedule: (state) => (state.schedule ?? null),
    getScheduleByName: (state) => {
      return (name) => {
        let key = Object.keys(daysWeek).indexOf(name);
        return state.schedule?.[`day${key + 1}`];
      };
    },
    getLoadingStatus: (state) => (state.status ?? null),
  },
  actions: {
    async loadSpreadsheetData() {
      const { status, data } = await useFetch('https://script.googleusercontent.com/macros/echo?user_content_key=LyCfXACezQGDJ-UH8kD63DdgLFrurWL8HmS0oM_be2v8E0gd0MSSC6Hb8nSdlUORckcpnUfd5qXGz8JK-hAlj_EVBUNfQN0gm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEXVRh3Tlv7en6qpuPx2CCjfdfmHLhg0i5IxC_vBcIDdI4dVl7OQuk7SQ7jQ8_u5_gbhVZTWV3rHzG0ENshxRo671Od-1FF0fw&lib=MSJmTFRhXtMYMsO0Zc9XgwBQIa2hFtaof',
        {
          lazy: true,
          server: false
        });
      this.status = status;
      this.schedule = data ?? null;
    }
  },
});
