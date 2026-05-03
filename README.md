# Notes

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Motivation

Monorepo setup to have code samples of various technologies i have worked with

## Setup

`libs` to include packages that can be submitted and used across different projects

Currently has:

- `components`
  - A wrapper around Tamagui to follow atomic design guidelines and build universal components
- `utility`
  - Functions that can be used across different apps

`apps` to include apps that can be native or web

Currently has:
  
- `aws-amplify-cognito`
  - uses react-native, aws cognito and components library
- `aws-amplify-cognito-web`
  - uses react, aws cognito and components library 
