import React, { ReactElement } from 'react';

import { PhoneListProps } from './phone-list-props';

const PhoneList = (props: PhoneListProps): ReactElement => {
  //Route for local images
  const srcImg = require(`../../shared/images/${props.phoneList.imageFileName}`);

  const cardClick = () => {
    props.onCardClick(props.phoneList.id);
  };

  return (
    <>
      {props.phoneList && (
        <div className="phone-card" onClick={cardClick}>
          <h3 className="phone-card__title">
            {props.phoneList.name && props.phoneList.name}
          </h3>
          <h4 className="phone-card__title">
            {props.priceTitle}
            <span>
              {props.phoneList.price && props.phoneList.price}
              {props.currency}
            </span>
          </h4>
          <img
            className="modal-detail-container--img"
            src={srcImg}
            alt={props.phoneList.name}
          />
        </div>
      )}
    </>
  );
};

PhoneList.defaultProps = {
  priceTitle: 'Price:',
  currency: '€',
};

export { PhoneList as default };
