import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (orderBy: string) => void;
  setSearchText: (searchText: string) => void;
  unsetGenreId: () => void;
  unsetPlatformId: () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, searchText: undefined, genreId },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  unsetGenreId: () =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: undefined } })),
  unsetPlatformId: () =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId: undefined },
    })),
}));

export default useGameQueryStore;
