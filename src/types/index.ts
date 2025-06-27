export interface Message {
  id: string;
  text: string;
  variant: 'sent' | 'received';
}
