export type MenuItem = {
  label: string;
  path: string;
  children?: { label: string; path: string; }[];
}; 