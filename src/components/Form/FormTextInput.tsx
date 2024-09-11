import {TextInput, TextInputProps} from '@components';
import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
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
          erroMessage={fieldState.error?.message}
          {...testInputProps}
        />
      )}
    />
  );
}
