// store/useAppStore.js
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useAppStore = create(
  devtools((set) => ({
    // Admin panel ochiq yoki yopiq holati
    isAdminPanelOpen: false,
    toggleAdminPanel: () =>
      set((state) => ({ isAdminPanelOpen: !state.isAdminPanelOpen })),
    openAdminPanel: () => set({ isAdminPanelOpen: true }),
    closeAdminPanel: () => set({ isAdminPanelOpen: false }),

    // Admin login holati (true/false)
    isAdmin: false,
    setIsAdmin: (value) => set({ isAdmin: value }),
  }))

)
export default useAppStore

  //dashboard input qiymati
  export const useDashboardInputStore=create(
    devtools((set)=>({
      text:"",
      setText : (v)=>set({text:v})
    }))
  )
