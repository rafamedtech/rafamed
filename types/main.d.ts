export type Stack = {
  id: number;
  title: string;
  icon: string;
};

export interface Template {
  id: number;
  title: string;
  description: string;
  stack: string[];
  images: string[];
  source: string;
  demo: string;
}
