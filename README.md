# React + TypeScript + Vite

This is the resolution for the following exercise:

"Create a react application that configures subscription payments based upon the inputs entered
in the form. As the form is being filled in, a label that describes the configuration is updated in
real-time. The result displayed should contain the amount billed immediately, the amount being
billed in the future and for how long. If the subscription is not indefinite, then list the number of
payments made and total cost of the subscription in the label text. If there is a trial period,
please explain that in the text as well."

## Tech Stack

- Vite: For a fast build tool and development server.
- TypeScript: For type safety and better development experience.
- Mui: Material UI as my components library.
- Mui Styled Components: For component-level styling.
- Formik + Yup: For form handling and validation.
- React Testing Library + Jest: For testing.
- cypress: Automated e2e tests.

## Usage

```
// Install all the dependencies
npm install

// Run server and client
npm start
```

## Main Folder Structure (src)

#### components
The main app folder. Here we have logical components that compose the application. Divided in semantic folders (Example: Everything related to bookings is placed in /components/Bookings folder)

#### pages
This folder should contain all the pages pointed by a router (that can be implemented as the application grows)

#### styles.tsx
Global styled components.

#### types
Global types

#### utils
General utilities should be placed in here.

## Personal Considerations

This is a result of a one-day dedication to solve this challenge. Of course this is not a full feature application, just a example of how a form can be implemented and covered with tests. I chose to mix the test coverage using unit tests and also automated tests.

How to run cypress:

  ```
  // Run the app
  npm start

  // execute cypress (another terminal instance)
  npm run cypress
  ```

  ## Next Steps
  - Implementing the submit callback. To where user will be redirected after the form is submitted? What should we do with the data submitted? These and other questions should be covered and described for future implementations.
  - Build a real home page for creating a complete flow, also allowing user to see his subscriptions, edit them and cancel them.
