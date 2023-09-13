export interface MenuMain {
  id: number;
  title: string;
  url: string;
}

export interface Meta {
  tagline: string;
  phone: string;
  email: string;
  year: string;
  menuMain: MenuMain[];
}

type MetaInitial = Meta | undefined;

export interface Store {
  meta: MetaInitial;
  isLoading: boolean;
  onFeatchMeta: () => Promise<void>;
  onLoading: (data: boolean) => void;
}
