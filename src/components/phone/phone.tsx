import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import Loader from 'react-spinners/RotateLoader';

// local components
import { Phone } from 'src/models/AppState';
import { State } from 'src/models/State';
import { setPhoneList, setLoadingAction } from '../../actions/appState.actions';
import PhoneCardList from '../phone-list/phone-list';
import PhoneModalDetails from '../phone-modal-details/phone-modal-details';
import { MainProps } from './phone-props';

export function CatalogueApp(props: MainProps): ReactElement {
  const [selectedPhone, setSelectedPhone] = useState<Phone[]>(undefined);
  const { phones, loading } = useSelector((state: State) => state.appState);
  const dispatch = useDispatch();

  // Load data from JSON directly
  const getPhones = async () => {
    let response: Phone[] = [];
    try {
      response = await axios.get('/data/phone.json').then((res) => {
        return res.data;
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }

    dispatch(setPhoneList({ phones: response }));
  };

  // useEffect with function to load Data from "API"
  useEffect(() => {
    setTimeout(() => {
      getPhones();
    }, 3000);
  }, []);

  const onPhoneCardClick = (PhoneId: number) => {
    onHandlePick(PhoneId);
  };

  const onHandlePick = (PhoneId: number) => {
    const phoneSelected = phones.find((phone: any) => {
      return phone.id === PhoneId;
    });
    setSelectedPhone(phoneSelected);
  };

  const onClearSelection = () => {
    setSelectedPhone(undefined);
  };

  // Early Return
  if (loading) {
    return (
      <div className="loader__override">
        <Loader size={15} loading={loading} />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1 className="header__title">{props.headerTitle}</h1>
      </div>
      <div className="container">
        {phones.map((phone: any) => (
          <React.Fragment key={phone.id}>
            <PhoneCardList onCardClick={onPhoneCardClick} phoneList={phone} />
          </React.Fragment>
        ))}
      </div>
      <PhoneModalDetails
        selectedPhone={selectedPhone}
        onCloseModal={onClearSelection}
      />
    </div>
  );
}

CatalogueApp.defaultProps = {
  headerTitle: 'Phone Catalogue',
};
