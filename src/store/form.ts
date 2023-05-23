import { create } from 'zustand';

interface FormState {
  form: object;
}

const useFormStore = create<FormState>()(set => ({
  form: {},
}));
