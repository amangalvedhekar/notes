//#region Imports
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { H2, H1, YStack } from 'tamagui';
import { Button, Checkbox, Paragraph } from '../../atoms';
import { Hide, Lock, Profile, Show, Unlock } from '../../icons';
import { InputWithLabel } from '../../molecules';
import { LiveValidation } from '../LiveValidation';
import type { FormTouched, FormUi, FormValues } from './types';
import {
  getErrors,
  getPasswordChecks,
  getPasswordValidationItems,
  initialTouched,
  initialUi,
  initialValues,
} from './utility';
//#endregion

export const Registration = () => {
  //#region State
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<FormTouched>(initialTouched);
  const [ui, setUi] = useState<FormUi>(initialUi);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //#endregion

  //#region Field Helpers
  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues(prev => ({ ...prev, [key]: value }));
    setUi(prev => ({ ...prev, serverError: null }));
  };

  const touchField = (key: keyof FormTouched) => {
    setTouched(prev => ({ ...prev, [key]: true }));
  };
  //#endregion

  //#region Derived State
  const passwordChecks = getPasswordChecks(values.password);
  const passwordValidationItems = getPasswordValidationItems(passwordChecks);
  const isPasswordValid = Object.values(passwordChecks).every(Boolean);
  const errors = getErrors(values, isPasswordValid);

  const showError = (field: keyof typeof errors) =>
    (touched[field] || ui.isSubmitted) && !!errors[field];

  const canSubmit =
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    !errors.acceptedLegal &&
    !ui.isSubmitting;
  //#endregion

  //#region Actions
  const onSubmit = () => {
    setUi(prev => ({ ...prev, isSubmitted: true, serverError: null }));

    if (!canSubmit) {
      return;
    }

    // setUi(prev => ({ ...prev, isSubmitting: true }));
    // setUi(prev => ({ ...prev, isSubmitting: false }));
  };
  //#endregion

  //#region Render
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustKeyboardInsets
      contentContainerStyle={{ margin: 8 }}
    >
      <YStack flex={1} justifyContent="space-between">
        <YStack gap="$1">
          <H1 color="purple">Registration</H1>
          <H2 fontWeight="bold">Create an account</H2>
          <InputWithLabel
            labelText="Email"
            size="$6"
            placeholder="test@example.com"
            enablesReturnKeyAutomatically
            id="email"
            leftIcon={<Profile />}
            value={values.email}
            onChangeText={(value) => setField('email', value)}
            onBlur={() => touchField('email')}
            isInvalid={showError('email')}
            errorMessage={errors.email ?? undefined}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <InputWithLabel
            labelText="Password"
            id="password"
            size="$6"
            placeholder="password"
            leftIcon={showPassword ? <Unlock /> : <Lock />}
            rightIcon={showPassword ? <Show /> : <Hide />}
            onRightIconPress={() => setShowPassword((prev) => !prev)}
            value={values.password}
            onChangeText={(value) => setField('password', value)}
            onBlur={() => touchField('password')}
            isInvalid={showError('password')}
            errorMessage={errors.password ?? undefined}
            secureTextEntry={!showPassword}
          />
          <LiveValidation
            items={passwordValidationItems}
            visible={values.password.length > 0}
          />
          <InputWithLabel
            labelText="Confirm Password"
            id="confirmPassword"
            placeholder="confirm password"
            size="$6"
            leftIcon={showConfirmPassword ? <Unlock /> : <Lock />}
            rightIcon={showConfirmPassword ? <Show /> : <Hide />}
            onRightIconPress={() => setShowConfirmPassword((prev) => !prev)}
            value={values.confirmPassword}
            onChangeText={(value) => setField('confirmPassword', value)}
            onBlur={() => touchField('confirmPassword')}
            isInvalid={showError('confirmPassword')}
            errorMessage={errors.confirmPassword ?? undefined}
            secureTextEntry={!showConfirmPassword}
          />
          <YStack margin="$2">
            <Checkbox
              id="tos-pp-agreement"
              size="$6"
              labelText="Terms of Service"
              checked={values.acceptedLegal}
              onCheckedChange={(checked) => {
                setField('acceptedLegal', checked === true);
                touchField('acceptedLegal');
              }}
            />
            <Paragraph>
              I accept the terms and condition as well as the privacy policy
            </Paragraph>
            {showError('acceptedLegal') ? (
              <Paragraph color="red">{errors.acceptedLegal}</Paragraph>
            ) : null}
          </YStack>
          {ui.serverError ? (
            <YStack margin="$2">
              <Paragraph color="red">{ui.serverError}</Paragraph>
            </YStack>
          ) : null}
          <Button
            themeInverse
            marginHorizontal="$2"
            borderRadius="$8"
            size="$4"
            onPress={onSubmit}
            disabled={!canSubmit}
            isLoading={ui.isSubmitting}
          >
            Register
          </Button>
        </YStack>
        <YStack marginTop="$4">
          <Paragraph textAlign="center" fontWeight="bold">
            Already have an account?
          </Paragraph>
          <Button
            marginHorizontal="$2"
            borderRadius="$8"
            size="$4"
            onPress={console.log}
          >
            Login
          </Button>
        </YStack>
      </YStack>
    </ScrollView>
  );
  //#endregion
};
