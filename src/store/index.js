import create from 'zustand';

export const useGlobalState = create(set => ({
  isModalOpen: false,
  setModalOpen: e =>
    set(state => ({
      isModalOpen: e,
    })),
}));
