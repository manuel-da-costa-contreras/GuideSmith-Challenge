import { Phone } from 'src/models/AppState';

export interface PhoneModalDetailsProps {
  selectedPhone: Phone;

  colorTitle?: string;
  manufacturerTitle?: string;
  priceTitle?: string;
  processorTitle?: string;
  memoryRamTitle?: string;
  screenSizeTitle?: string;

  onCloseModal?: () => void;
}
