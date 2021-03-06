import * as React from 'react';
export declare type InputFieldProps = {
    label: string | undefined;
    value: string;
    inputMode?: 'outlined' | 'flat' | undefined;
    disabled?: boolean;
    errorMessage?: string;
    placeholder?: string;
    multiLine?: boolean;
    setRef?(value: any): void;
    onChangeHandler(value: any): void;
    onBlurHandler?(value: any): void;
    onFocusHandler?(value: any): void;
    onSubmitEditing?(value: any): void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    rightIconName?: string;
    rightIconComponent?(): React.ReactElement;
    InputStyle?: Object;
    textProps?: Object;
    iconProps?: Object;
    showInputLinkComponent?: boolean;
    InputLinkComponent?(): React.ReactElement;
    inputFieldStyle?: object;
    disabledInputStyle?: object;
    prefix?: string;
    testId?: string;
    leftCustomIcon?: string | ((e?: any) => React.ReactElement);
    leftCustomIconProps?: {};
    customErrorContainerStyle?: {};
};
export declare const InputField: (props: InputFieldProps) => JSX.Element;
