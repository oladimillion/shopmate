[![Build Status](https://travis-ci.com/oladimillion/shopmate.svg?token=yCUwzn8wsJHeQbpUgpqS&branch=develop)](https://travis-ci.com/oladimillion/shopmate)

# Credit
[Turing](https://www.turing.com)

# Shopmate
An e-commerce application

Open [https://oladimillion.github.io/shopmate/](https://oladimillion.github.io/shopmate/) to view the hosted App.

## Tools/Frameworks Used
- React
- Redux
- Redux-saga
- Sematic-ui-react

## To run the app locally
  1. Clone the repository:
  ```
  git clone https://github.com/oladimillion/shopmate.git
  ```
  2. Navigate into the cloned repository folder

  3. Install dependencies:
  ```
  $ npm install
  ```
  4. run `npm start` to start the server

  5. visit `http://localhost:3000` in your browser

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run coverage`

Launches the test runner in the interactive watch mode, plus the coverage in tabular format.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Screenshots of the application
#### Homepage
<img width="1440" alt="Screen Shot 2019-05-31 at 3 37 43 PM" src="https://user-images.githubusercontent.com/23438586/58713626-e1fb2880-83ba-11e9-83aa-e34c49a76afc.png">

#### View cart modal
<img width="1440" alt="Screen Shot 2019-05-31 at 3 38 29 PM" src="https://user-images.githubusercontent.com/23438586/58713865-6cdc2300-83bb-11e9-85b0-bd07212b5c1c.png">

#### View item page
<img width="1440" alt="Screen Shot 2019-05-31 at 3 38 46 PM" src="https://user-images.githubusercontent.com/23438586/58713973-a44acf80-83bb-11e9-94f4-2d6777ce6d32.png">

#### Signup modal
<img width="1440" alt="Screen Shot 2019-05-31 at 3 50 47 PM" src="https://user-images.githubusercontent.com/23438586/58714558-e294be80-83bc-11e9-863e-be64a6b9bac7.png">

## The Project Folder/Directory and File Structure
```
shopmate
  └── src
      ├── App.js
      ├── App.test.js
      ├── __test__
      │   └── setup
      │       └── index.js
      ├── actions
      │   ├── __test__
      │   │   ├── cart.test.js
      │   │   ├── categories.test.js
      │   │   ├── createAction.test.js
      │   │   ├── departments.test.js
      │   │   ├── order.test.js
      │   │   ├── products.test.js
      │   │   ├── shippingRegion.test.js
      │   │   ├── stripe.test.js
      │   │   ├── tax.test.js
      │   │   └── users.test.js
      │   ├── cart.js
      │   ├── categories.js
      │   ├── createAction.js
      │   ├── departments.js
      │   ├── index.js
      │   ├── order.js
      │   ├── products.js
      │   ├── shippingRegion.js
      │   ├── stripe.js
      │   ├── tax.js
      │   ├── types.js
      │   └── users.js
      ├── api
      │   └── index.js
      ├── assets
      │   └── images
      │       ├── Flag_of_Britain.svg
      │       ├── Images-modal4.png
      │       ├── icons-rocket.png
      │       ├── images-shirt12.png
      │       ├── images-shirt13.png
      │       ├── images-shirt14.png
      │       ├── images-shoe2.png
      │       ├── logos-PayPal.png
      │       ├── logos-mastercard.png
      │       ├── logos-visa.png
      │       ├── shirt.png
      │       └── usa-flag.svg
      ├── common.css
      ├── components
      │   ├── Checkout
      │   │   ├── Confirmation
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   ├── index.md.css
      │   │   │   ├── index.sm.css
      │   │   │   └── index.test.js
      │   │   ├── Delivery
      │   │   │   ├── deliveryInputData.js
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   └── index.test.js
      │   │   ├── Finish
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   └── index.test.js
      │   │   ├── Footer
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   └── index.test.js
      │   │   ├── Header
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   ├── index.md.css
      │   │   │   └── index.test.js
      │   │   ├── Payment
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   ├── index.md.css
      │   │   │   ├── index.sm.css
      │   │   │   └── index.test.js
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   ├── index.md.css
      │   │   └── index.test.js
      │   ├── Footer
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   ├── index.md.css
      │   │   └── index.test.js
      │   ├── Homepage
      │   │   ├── Catalogue
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   ├── index.md.css
      │   │   │   ├── index.sm.css
      │   │   │   └── index.test.js
      │   │   ├── CategoryNavSection
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   └── index.test.js
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   └── index.test.js
      │   ├── Login
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   └── index.test.js
      │   ├── NavBar
      │   │   ├── NavBarDark
      │   │   │   ├── index.js
      │   │   │   └── index.test.js
      │   │   ├── NavBarLight
      │   │   │   ├── index.js
      │   │   │   └── index.test.js
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   ├── index.md.css
      │   │   ├── index.sm.css
      │   │   └── index.test.js
      │   ├── Profile
      │   │   ├── ProfileForm.js
      │   │   ├── ProfileForm.test.js
      │   │   ├── addressInfo.js
      │   │   ├── basicInfo.js
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   ├── index.md.css
      │   │   └── index.test.js
      │   ├── Register
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   └── index.test.js
      │   ├── ViewCart
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   ├── index.md.css
      │   │   ├── index.sm.css
      │   │   └── index.test.js
      │   ├── ViewItem
      │   │   ├── Review
      │   │   │   ├── index.css
      │   │   │   ├── index.js
      │   │   │   ├── index.sm.css
      │   │   │   └── index.test.js
      │   │   ├── index.css
      │   │   ├── index.js
      │   │   ├── index.md.css
      │   │   └── index.test.js
      │   └── common
      │       ├── AddFavourite
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── CardItem
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   ├── index.md.css
      │       │   ├── index.sm.css
      │       │   └── index.test.js
      │       ├── CheckboxLabel
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── Featured
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── HorizontalLine
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── HorizontalSpacing
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── InputGroup
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   ├── index.md.css
      │       │   └── index.test.js
      │       ├── ItemButtons
      │       │   ├── ItemButton.js
      │       │   ├── ItemLink.js
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── LabelInput
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── Loader
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── MessageAlert
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── Modal
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── ModalForm
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   ├── index.sm.css
      │       │   └── index.test.js
      │       ├── NewsLetter
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   ├── index.md.css
      │       │   └── index.test.js
      │       ├── Pagination
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   ├── index.md.css
      │       │   └── index.test.js
      │       ├── PanelSection
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── Popular
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── PriceCurrency
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── RadioButton
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── RadioLabel
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── RoundButton
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── SelectQuantity
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   └── index.test.js
      │       ├── Sidebar
      │       │   ├── index.css
      │       │   ├── index.js
      │       │   ├── index.sm.css
      │       │   └── index.test.js
      │       └── SquareButton
      │           ├── index.css
      │           ├── index.js
      │           └── index.test.js
      ├── index.css
      ├── index.js
      ├── index.md.css
      ├── logo.svg
      ├── reducers
      │   ├── __test__
      │   │   ├── cart.test.js
      │   │   ├── categories.test.js
      │   │   ├── departments.test.js
      │   │   ├── loginModal.test.js
      │   │   ├── order.test.js
      │   │   ├── products.test.js
      │   │   ├── registerModal.test.js
      │   │   ├── shippingRegion.test.js
      │   │   ├── stripe.test.js
      │   │   ├── tax.test.js
      │   │   ├── users.test.js
      │   │   └── viewCartModal.test.js
      │   ├── cart.js
      │   ├── categories.js
      │   ├── departments.js
      │   ├── index.js
      │   ├── initState.js
      │   ├── loginModal.js
      │   ├── order.js
      │   ├── products.js
      │   ├── registerModal.js
      │   ├── shippingRegion.js
      │   ├── stripe.js
      │   ├── tax.js
      │   ├── users.js
      │   └── viewCartModal.js
      ├── requests
      │   ├── __test__
      │   │   ├── cart.test.js
      │   │   ├── categories.test.js
      │   │   ├── departments.test.js
      │   │   ├── order.test.js
      │   │   ├── products.test.js
      │   │   ├── shippingRegion.test.js
      │   │   ├── stripe.test.js
      │   │   ├── tax.test.js
      │   │   └── users.test.js
      │   ├── cart.js
      │   ├── categories.js
      │   ├── departments.js
      │   ├── index.js
      │   ├── order.js
      │   ├── products.js
      │   ├── shippingRegion.js
      │   ├── stripe.js
      │   ├── tax.js
      │   └── users.js
      ├── routes
      │   ├── ProtectedRoutes.js
      │   ├── ProtectedRoutes.test.js
      │   └── routes.js
      ├── sagas
      │   ├── __test__
      │   │   ├── cart.test.js
      │   │   ├── categories.test.js
      │   │   ├── departments.test.js
      │   │   ├── order.test.js
      │   │   ├── products.test.js
      │   │   ├── shippingRegion.test.js
      │   │   ├── stripe.test.js
      │   │   ├── tax.test.js
      │   │   └── users.test.js
      │   ├── cart.js
      │   ├── categories.js
      │   ├── departments.js
      │   ├── index.js
      │   ├── order.js
      │   ├── products.js
      │   ├── shippingRegion.js
      │   ├── stripe.js
      │   ├── tax.js
      │   └── users.js
      ├── serviceWorker.js
      ├── setupTests.js
      └── utils
          ├── __test__
          │   ├── connectivityCheck.test.js
          │   ├── fetch.test.js
          │   ├── formatErrorMessage.test.js
          │   ├── saveUserData.test.js
          │   └── setAuthToken.test.js
          ├── auth.js
          ├── connectivityCheck.js
          ├── fetch.js
          ├── formatErrorMessage.js
          ├── keys.js
          ├── saveUserData.js
          ├── setAuthToken.js
          └── toastr.js

62 directories, 285 files

```



