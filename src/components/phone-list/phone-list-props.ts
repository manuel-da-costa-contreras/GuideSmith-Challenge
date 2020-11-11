import { Phone } from 'src/models/AppState';

export interface PhoneListProps {
  phoneList: Phone;
  priceTitle?: string;
  currency?: string;

  onCardClick?: (phoneId: number) => void;
}
