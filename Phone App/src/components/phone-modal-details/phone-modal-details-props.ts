import { Phone } from 'src/models/AppState';

export interface PhoneModalDetailsProps {
  selectedPhone: Phone;

  onCloseModal?: () => void;
}
