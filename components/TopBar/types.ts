export type MenuItem = {
  testId?: string;
  label: string;
  path: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: {
    testId?: string;
    label: string; 
    path: string;
  }[];
}; 