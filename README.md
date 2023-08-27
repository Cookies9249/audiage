# Welcome to Audiage!

Audiage is an efficient, beginner-friendly program designed to filter out harmful audio frequencies in a sound file.

The project consists of two parts: a website that can be accessed through the Internet, and the downloadable app that can access offline. The source code for the app can be found in the `Audiage` folder, while the remaining source code is for the website.

## Audiage App

The Audiage app was built entirely in Python using various libraries such as NumPy, SciPy, Librosa, and Tkinter.

A full list of the required installations is listed below. These are required to run the app successfully:
* `matplotlib`
* `scipy`
* `librosa`
* `numpy`
* `audioread`
* `sounddevice`
* `wavio`

IMPORTANT INFORMATION:
- Our software is currently only compatible with .wav files; any other audio formats will not work
- Make sure to input a valid integer for both the minimum and maximum frequency between 20 to 20000 Hz

## Audiage Website

The Audiage website contains functionality for the home page, access to the user menu, authentication and directory modals, along with an upload page where you can configure the required settings along with uploading and playing your audio files.

The website was built using NextJS, Typescript, Chakra UI for design, and Recoil for state management. It can be accessed through the following link: https://audiage.vercel.app/. Alternatively, the source code can be downloaded through GitHub and run locally using http://localhost:3000 with your browser.

#### Required Installations

Using NodeJS, the following `npm` installations are required to run this project locally.

* Chakra Setup: `npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion`
* Fonts and icons: `npm i @chakra-ui/icons react-icons`
* Firebase: `npm i firebase react-firebase-hooks`
* Recoil: `npm i recoil`
* Additional Requirements: `npm i encoding`

#### NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
* [Next.js 13](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration)
* [Next.js Layouts](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)


#### Chakra UI

Chakra UI was used for designing the UI of the project. The documentation for Chakra components used in this project are found below:

* [Chakra Setup](https://chakra-ui.com/getting-started/nextjs-guide)
* [Chakra Theme](https://chakra-ui.com/docs/styled-system/customize-theme)
* [Chakra Fonts](https://chakra-ui.com/community/recipes/using-fonts)
* [Chakra Input](https://chakra-ui.com/docs/components/input)
* [Chakra Icons](https://chakra-ui.com/docs/components/icon)
* [Chakra Modals](https://v1.chakra-ui.com/docs/components/overlay/modal)

#### Recoil

Recoil was used for global state management. Read the documentation below:

* [Recoil Documentation](https://recoiljs.org/)

#### Firebase

Firebase was used for user authentication and storage, with the aid of `react-firebase-hooks`.

* [Firebase](https://firebase.google.com/)
* [React-Firebase Hooks](https://www.npmjs.com/package/react-firebase-hooks)

### Thank you for visiting Audiage!!!