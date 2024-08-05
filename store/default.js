import {defineStore} from 'pinia';
import {useFetch} from 'nuxt/app';
import {dayNames} from '@/constants/index.js';

export const useDefaultStore = defineStore('default', {
  state: () => ({
    schedule: null,
  }),
  getters: {
    getSchedule: (state) => (state.schedule ?? null),
    getScheduleByName: (state) => {
      return (name) => {
        let key = Object.keys(dayNames).indexOf(name);
        return state.schedule?.[`day${key + 1}`];
      }
      // return state.schedule?.[`day${currentDay}`] ?? null;
    }
  },
  actions: {
    async loadSpreadsheetData() {
      const res = await useFetch('https://script.googleusercontent.com/macros/echo?user_content_key=LyCfXACezQGDJ-UH8kD63DdgLFrurWL8HmS0oM_be2v8E0gd0MSSC6Hb8nSdlUORckcpnUfd5qXGz8JK-hAlj_EVBUNfQN0gm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEXVRh3Tlv7en6qpuPx2CCjfdfmHLhg0i5IxC_vBcIDdI4dVl7OQuk7SQ7jQ8_u5_gbhVZTWV3rHzG0ENshxRo671Od-1FF0fw&lib=MSJmTFRhXtMYMsO0Zc9XgwBQIa2hFtaof');
      this.schedule = res?.data ?? null;
      console.log(this.schedule);
    },
  },
});
