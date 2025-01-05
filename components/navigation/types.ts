export type MenuItem = {
  label: string;
  path: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: { 
    label: string; 
    path: string;
  }[];
}; 