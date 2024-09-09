import { DECREMENT, INCREMENT } from '../constant/count.const';

export const increment = (payload) => ({ type: INCREMENT, payload });
export const decrement = (payload) => ({ type: DECREMENT, payload });
