import React, { FC, Fragment } from 'react'

import { InputProps } from 'component-library/src/components/Input/Input.types'
import {
  StyledMessage,
  StyledLabel,
  StyledInput,
  StyledText,
} from 'component-library/src/components/Input/Input.component'

export const Input: FC<InputProps> = ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <>
      {label && (
        <StyledLabel>
          <StyledText disabled={disabled} error={error}>
            {label}
          </StyledText>
        </StyledLabel>
      )}
      <StyledInput
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      {error && (
        <StyledMessage>
          <StyledText error={error}>{message}</StyledText>
        </StyledMessage>
      )}
    </>
  )
}
