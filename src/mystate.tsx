// mystate.ts

import { atom } from 'recoil';

export const myState = atom({
  key: 'myState',
  default: {
    name: '',
    selectedLanguage: '', // Add a new property for selected language
    selectedCountry: '',  // Add a new property for selected country
    selectedImages:[] as string[]
  },
});
