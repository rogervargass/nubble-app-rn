import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput, TextInputProps} from '@components';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...testInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          onChangeText={field.onChange}
          value={field.value}
          errorMessage={fieldState.error?.message || errorMessage}
          {...testInputProps}
        />
      )}
    />
  );
}
