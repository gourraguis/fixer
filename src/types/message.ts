export interface Message {
  id: string;
  text: string;
  role: 'user' | 'model';
}
