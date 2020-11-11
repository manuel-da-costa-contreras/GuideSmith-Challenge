import React, { ReactElement } from 'react';

import Modal from 'react-modal';

import { PhoneModalDetailsProps } from './phone-modal-details-props';

const PhoneModalDetails = (props: PhoneModalDetailsProps): ReactElement => {
  // Route for local images
  const imgSrc = props.selectedPhone
    ? require(`../../shared/images/${props.selectedPhone.imageFileName}`)
    : null;

  return (
    <Modal
      isOpen={!!props.selectedPhone}
      onRequestClose={props.onCloseModal}
      contentLabel="Selected Phone"
      closeTimeoutMS={200}
      ariaHideApp={false}
      className="modal"
    >
      {props.selectedPhone && (
        <>
          <div className="modal-detail-container">
            <h3 className="modal__title">
              {props.selectedPhone.name && props.selectedPhone.name}
            </h3>
            <div>
              <p>
                {props.selectedPhone.description &&
                  props.selectedPhone.description}
              </p>
              <p>
                {props.colorTitle}
                <span>
                  {props.selectedPhone.color && props.selectedPhone.color}
                </span>
              </p>
              <p>
                {props.manufacturerTitle}
                <span>
                  {props.selectedPhone.manufacturer &&
                    props.selectedPhone.manufacturer}
                </span>
              </p>
              <p>
                {props.priceTitle}
                <span>
                  {props.selectedPhone.price && props.selectedPhone.price}€
                </span>
              </p>
              <p>
                {props.processorTitle}
                <span>
                  {props.selectedPhone.processor &&
                    props.selectedPhone.processor}
                </span>
              </p>
              <p>
                {props.memoryRamTitle}
                <span>
                  {props.selectedPhone.ram && props.selectedPhone.ram}Gb
                </span>
              </p>
              <p>
                {props.screenSizeTitle}
                <span>
                  {props.selectedPhone.screen && props.selectedPhone.screen}
                </span>
              </p>
            </div>
          </div>
          <img src={imgSrc} />
        </>
      )}
    </Modal>
  );
};

PhoneModalDetails.defaultProps = {
  colorTitle: 'Color:',
  manufacturerTitle: 'Manufacturer:',
  priceTitle: 'Price:',
  processorTitle: 'Processor:',
  memoryRamTitle: 'Memory Ram:',
  screenSizeTitle: 'Screen Size:',
};

export { PhoneModalDetails as default };
