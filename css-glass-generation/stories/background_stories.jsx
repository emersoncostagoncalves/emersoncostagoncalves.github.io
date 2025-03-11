import { create } from 'zustand';

const useStore = create((set) => ({
  url: 'none',
  setURL: (novoValor) => set({ url: novoValor }
    ),
    opacityValue: '0.5',
  setOpacity: (novoValor) => set({ opacityValue: novoValor }
    ),
    borderValue: '25',
    setBorder: (novoValor) => set({ borderValue: novoValor }
      ),
      blurValue: '50',
    setBlur: (novoValor) => set({ blurValue: novoValor }
      )
 
  
}));

export default useStore;