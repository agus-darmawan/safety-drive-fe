'use client';

import { useRef } from 'react';

import { useStore } from '@/store';

type IState = {
  auth: any;
};

const StoreInitializer = ({ auth }: IState) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    useStore.setState({ auth });
    initialized.current = true;
  }
  return null;
};

export default StoreInitializer;
