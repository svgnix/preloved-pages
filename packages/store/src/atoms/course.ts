import {atom} from "recoil";

export const courseState = atom<{isLoading: boolean, course: any}>({
  key: 'courseState',
  default: {
    isLoading: true,
    course: null
  },
});