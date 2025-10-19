import { create } from 'zustand'
import { devtools } from 'zustand/middleware'





const useAppStore = create(
    devtools((set) => ({
    isAdminPanelOpen: false,
    toggleAdminPanel: () =>
    set((state) => ({ isAdminPanelOpen: !state.isAdminPanelOpen })),
    openAdminPanel: () => set({ isAdminPanelOpen: true }),
    closeAdminPanel: () => set({ isAdminPanelOpen: false }),

    isAdmin: false,
    setIsAdmin: (value) => set({ isAdmin: value }),
    }))
)

export default useAppStore

