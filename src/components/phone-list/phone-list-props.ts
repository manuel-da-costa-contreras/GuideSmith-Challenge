import { Phone } from 'src/models/AppState';

export interface PhoneListProps {
  phoneList: Phone;

  onCardClick?: (phoneId: number) => void;
}
