import * as React from 'react';
import { PrimaryButton, PrimaryButtonType } from './PrimaryButton';
import { Colors } from '../commons';

export const SecondaryButton = (props: PrimaryButtonType) => {
  const { disabled = false } = props;
  return (
    <PrimaryButton
      contentWrapperStyle={{ elevation: 0 }}
      buttonColor={Colors.white}
      disabledColor={Colors.white}
      labelStyle={{ color: disabled ? Colors.newDimGrey : Colors.newBlue, marginLeft: 15, textAlign: 'center' }}
      buttonStyle={{ borderWidth: 1, borderColor: Colors.newDimGrey }}
      {...props}
    />
  );
};
