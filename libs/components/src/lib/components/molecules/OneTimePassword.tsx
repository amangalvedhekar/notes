import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentRef,
} from 'react';
import { Platform } from 'react-native';
import { Button, Paragraph, Input, XStack, YStack, type InputProps } from '../atoms';

const DEFAULT_LENGTH = 6;
const INPUT_GAP = 8;
const INPUT_WIDTH = 52;

type AtomInputRef = ComponentRef<typeof Input>;

export interface OneTimePasswordRef {
  clear: () => void;
  focus: () => void;
}

export interface OneTimePasswordProps {
  autoFocus?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  helperText?: string;
  inputProps?: Omit<
    InputProps,
    | 'autoFocus'
    | 'disabled'
    | 'inputMode'
    | 'keyboardType'
    | 'maxLength'
    | 'onChangeText'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'readOnly'
    | 'ref'
    | 'secureTextEntry'
    | 'testID'
    | 'value'
  >;
  isSubmitting?: boolean;
  label?: string;
  length?: number;
  onChangeText: (value: string) => void;
  onComplete?: (value: string) => void;
  onSubmit?: (value: string) => void;
  readOnly?: boolean;
  secureTextEntry?: boolean;
  submitDisabled?: boolean;
  submitLabel?: string;
  testID?: string;
  value: string;
}

const replaceAt = (value: string, index: number, character: string, length: number) => {
  const characters = value.padEnd(length, ' ').slice(0, length).split('');
  characters[index] = character || ' ';
  return characters.join('').trimEnd();
};

export const OneTimePassword = forwardRef<OneTimePasswordRef, OneTimePasswordProps>(
  (
    {
      autoFocus = false,
      disabled = false,
      errorMessage,
      helperText,
      inputProps,
      isSubmitting = false,
      label,
      length = DEFAULT_LENGTH,
      onChangeText,
      onComplete,
      onSubmit,
      readOnly = false,
      secureTextEntry = false,
      submitDisabled = false,
      submitLabel = 'Verify',
      testID = 'one-time-password',
      value,
    },
    forwardedRef
  ) => {
    const inputRefs = useRef<Array<AtomInputRef | null>>([]);
    const normalizedLength = Math.max(1, Math.floor(length));
    const sanitize = (nextValue: string) =>
      nextValue.replace(/\D/g, '').slice(0, normalizedLength);
    const sanitizedValue = sanitize(value);
    const isComplete = sanitizedValue.length === normalizedLength;
    const inputRowWidth =
      normalizedLength * INPUT_WIDTH + (normalizedLength - 1) * INPUT_GAP;

    const updateValue = (nextValue: string) => {
      const sanitizedValue = sanitize(nextValue);
      onChangeText(sanitizedValue);

      if (sanitizedValue.length === normalizedLength) {
        onComplete?.(sanitizedValue);
      }
    };

    useImperativeHandle(forwardedRef, () => ({
      clear: () => {
        onChangeText('');
        inputRefs.current[0]?.focus();
      },
      focus: () => {
        const firstEmptyIndex = Math.min(sanitizedValue.length, normalizedLength - 1);
        inputRefs.current[firstEmptyIndex]?.focus();
      },
    }));

    const handleChange = (text: string, index: number) => {
      const sanitizedText = sanitize(text);

      if (sanitizedText.length > 1) {
        const pastedValue = sanitize(`${value.slice(0, index)}${sanitizedText}`);
        updateValue(pastedValue);
        inputRefs.current[Math.min(pastedValue.length, normalizedLength - 1)]?.focus();
        return;
      }

      const nextValue = replaceAt(sanitizedValue, index, sanitizedText, normalizedLength);
      updateValue(nextValue);

      if (sanitizedText && index < normalizedLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleBackspace = (key: string, index: number) => {
      if (key !== 'Backspace' || index === 0 || value[index]) {
        return;
      }

      const previousIndex = index - 1;
      updateValue(replaceAt(sanitizedValue, previousIndex, '', normalizedLength));
      inputRefs.current[previousIndex]?.focus();
    };

    const getBackspaceHandler = (
      index: number
    ): Pick<InputProps, 'onKeyDown' | 'onKeyPress'> =>
      Platform.OS === 'web'
        ? { onKeyDown: (event) => handleBackspace(event.key, index) }
        : { onKeyPress: (event) => handleBackspace(event.nativeEvent.key, index) };

    return (
      <YStack gap="$3" testID={testID}>
        {(label || helperText) && (
          <YStack alignItems="center" gap="$1">
            {label && (
              <Paragraph fontSize="$7" fontWeight="700" textAlign="center">
                {label}
              </Paragraph>
            )}
            {helperText && (
              <Paragraph color="$gray10" textAlign="center">
                {helperText}
              </Paragraph>
            )}
          </YStack>
        )}

        <XStack gap={INPUT_GAP} justifyContent="center">
          {Array.from({ length: normalizedLength }, (_, index) => (
            <Input
              {...inputProps}
              ref={(input) => {
                inputRefs.current[index] = input;
              }}
              key={index}
              accessibilityLabel={`Digit ${index + 1} of ${normalizedLength}`}
              autoFocus={autoFocus && index === 0}
              borderColor={errorMessage ? '$red10' : inputProps?.borderColor}
              disabled={disabled}
              inputMode="numeric"
              keyboardType="number-pad"
              maxLength={normalizedLength}
              onChangeText={(text) => handleChange(text, index)}
              {...getBackspaceHandler(index)}
              readOnly={readOnly}
              secureTextEntry={secureTextEntry}
              selectTextOnFocus
              size="$5"
              testID={`${testID}-input-${index}`}
              textAlign="center"
              value={sanitizedValue[index] ?? ''}
              width={52}
            />
          ))}
        </XStack>

        {errorMessage && (
          <Paragraph color="$red10" textAlign="center" testID={`${testID}-error`}>
            {errorMessage}
          </Paragraph>
        )}

        {onSubmit && (
          <Button
            alignSelf="center"
            disabled={disabled || submitDisabled || isSubmitting || !isComplete}
            isLoading={isSubmitting}
            maxWidth="100%"
            onPress={() => onSubmit(sanitizedValue)}
            size="$5"
            testID={`${testID}-submit`}
            width={inputRowWidth}
          >
            {submitLabel}
          </Button>
        )}
      </YStack>
    );
  }
);

OneTimePassword.displayName = 'OneTimePassword';
