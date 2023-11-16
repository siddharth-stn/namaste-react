# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File watching algorithm (written in c++)
- Caching - Faster builds
- Image Optimisation
- Minify Code (Production Build)
- Bundleing (Production Build)
- Compress (Production Build)
- Consistent Hashing
- Code Splitting
- Differential Bundling - So that app can run smoothly in older browsers
- Diagnostics
- Error Handling and Suggestions
- Host apps on https
- Tree Shaking - remove unused code
- Different DEV and Production Bundle

* Building a Web App

- Plan the App

  1. Plan for the UI.

  eg:-
  _ Header
  _ - Logo
  _ - Nav Bar
  _ Main
  _ - Search Box
  _ - Restaurant Card Container
  _ - Restaurant Card
  _ - Img
  _ - Name of Res, Star Rating, Cuisine, Delivery Time
  _ Footer
  _ - Copyright
  _ - Links \* - Contact

* Props - Properties

- Can pass data to the components
- Passing a prop to a component is similar to pass an argument to a function
- Whenever a dynamic data is to be used props is used
- props is available as a props object in the function

* What is Config Driven UI?

- Ans: Different data causes the UI to show differently. UI is driven by the data from the backend. UI can be changed by the data from the backend.

* Data from Backend

- It is generally coming from the api's in the JSON format.

* In any React Application there is a UI Layer and a Data Layer which combines to form a good application.

* Q. What is Optional Chaining in javaScript?

* Note- Learn the Array methods = map, filter and reduce in javaScript.

* Note - Always include a unique key whenever using map or any other iterating method or your app will take a performance hit.

- Never use index as keys.

* Components must be written in separate files.

* There are two types of exports and imports in javaScript.

- default export and import.
  - eg:-
    export default <varriable_name>
    import <variable_name> from <file_path>
- named export and import.
  - eg:-
    export const <variable_name>
    import {<variable_name>} from <file_path>

* Episode Five Part Two

  - Make the app interactive
    - Add a button to the app that filters and shows the best restaurants.
    * To make the button do something just use onClick in the code of the button and attach a function to it to perform your desired work in the webpage. eg:-
      <button onClick={() => {---do something here---}}></button>

* Q Why react is fast?

- Ans:- It can do fast and efficient DOM Manipulation.

* Q What are React Hooks?

- Ans:- They are normal JavaScript funtions.
- Two most important hooks are useState() and useEffect().

* never use useState() inside an if and if - else block.
* never use useState() inside a function.
* never use useState() inside a for loop.

* Whenever a state variable changes react will update that component

* Q How react works behind the scene while updating the DOM?

- Ans:- React uses "Reconciliation Algorithm", which is also known as React Fiber.

* Q What is Virtual DOM?

- Ans: Virtual DOM is a representation of actual DOM. They are the React Elements (Objects) created by the method React.createElement()

* Q What is a diff algorithm?

- Ans: It finds out the difference between two Virtual DOM.

* useEffect() Hook:

- comes from react library as a named imports
- takes in two arguments, first is a callback function and, second is a dependency array.

* Q When is this callback function be called?

- Ans:- After the UI is rendered then it will call this callback function be called.

* CORS Policy

- Ans:- Our Browser blocks api call to another origin.

* Q What is shimmer UI?

- Ans:- Show fake page to the user until real data is loaded.

* Q What is conditional rendering?

- Ans:- Conditional rendering is when UI is rendered according to the conditions provided by the data from the backend/api.

* Q Why do we use state variable? Why normal javaScript variable dont work in place of state variable?

- Ans:- UI does not re render when a normal variable is changed that is why normal variable do not work to update the DOM.

* Whenever state variable changes, react triggers a reconciliation cycle(re-renders the component)

* Q When is useEffect() called in the app?

- Ans- it is called after every render of that component, but you can change this behaviour by using the dependency array.
- if the dependency array is empty [] => useEffect() will be called on the initial render only.
- if the dependency array has an element => useEffect() will be called everytime that dependency changes an on the initial render.
- useEffect() will not cause a re-render of the component, while setState() causes a re render of the component.

* React Routes:-

- Reacct routes are created by doing configuration in the root level of the app.
- configuration will be done by using a library called createBrowserRouter.
- a react package known as react-router-dom is installed from which createbrowserRouter is imported to the root level of the application.
- configuration is passed as an argument(in the form of an Array) to the createBrowserRouter() function.
- configuration is that information that tells the browserRouter what to do when a specific route(path) is called.
- this created configuration must be passed to be rendered on to the page, for which another library is imported from the react-router-dom known as RouterProvider.
- This RouterProvider is a component in which we pass a prop named as
  router={ROUTES_CONFIGURATION_ARRAY}.
- This <RouterProvider router={ROUTES_CONFIGURATION_ARRAY}> is then passed to the root level in the root.render() function.
- react-router-dom gives us an access to an important hook for showing the error page, this hook is called useRouteError.

* Children Routes is a list of routes inside a route.

  - next put the conditions in the app element to show the route according to the condition.
  - next import Outlet and use in the app element to show the different routes that are queried.

* Never use anchor tag to link in react as the whole page gets refreshed.
  - better to use link component library to do this work, from react-router-dom.
  - this process is called client side routing. and these type of applications are called spa's (single page applications)

# Dynamic Routing

- api call will be made.

* useParams() hook to extract parameters from the query

  - import useParams() from react-router-dom

# Creating declaring state variable in class based components

- State is created whenever an instance of class is created.
- State variable is created inside the constructor of the class.

* if you want to create more than one state variable in class based components:

- create as many state variables as you need in the this.state = {} object only

# Lifecycle of a react component

- componentdidmount() {

}

- Q Why api call is made in the componentDidMount() method.

* Ans. comoponentDidMount is **not exactly similar to useEffect() hook(and not using lifecycle methods behined the scene)**
* in functional components, calling api in this method is
* important as the api call is an asynchronous method and takes some time to get the data and componentDidMount(){}
* will allow to render the component first without waiting for the api call to complete and the component will fill with
* the data after it is fetched by the api call in the componentDidMount(){} or useEffect() methods.

* Q When is componentDidUpdate() {} methods called?
* Ans: componentDidUpdate(){} method is called by react after the setState() is called which causes render phase to start again.
* React will call this componentDidUpdate(){} method whether user defines it in the code or not.

* Q What is the componentnWillUnmount(){} method?
* Ans: The componentWillUnmount(){} will be called by react (whether the user defines it in the code or not) just before a component is
* removed from the DOM.

* **Never compare lifecycle methods to useEffect().**

# Optimising the React App

- Single responsibility principle.

* Each component is a different function and should do only one thing at a time.
* It helps to write better test case for individual moudules/components/functions.

- Concept of custom Hooks

* They are nothing but javscript funtions(helper functions or utility functions) at the end of the day.
* Makes the code more readable/modular/reusable.
* separate file for each custom hook.

- By making smaller bundles of files known as

* chunking
* code splitting
* dynamic bundling
* on demand loading

* using **lazy loading** a.k.a **on demand loading** to make smaller chunks of the code
* use of the **Suspense** Component to clear the hung up due to lazy loading.

# Styling and beautifying your application

- Material UI is extensively used in the industry.
- Bootstrap is used in the industry by many companies.
- Chakra UI is also used in the industry.
- There is one ant design and they claim to be second most popular designing library.
- Styled Components are also used.

* But we are going to learn styling of the components using **TAILWIND CSS** (latest and trending)

# Higher Order Component

- It is a function that takes in a component and returns a component.
- It takes in a component and enhances its feature and returns a new component.

** All the react applications have two layers UI layer and Data layer
** If you learn to manage the data layer (props, state, local variable) then your application becomes very fast

# Props Drilling

- In react data passes from parent to children.
- Passing data from parent to its child and then child to its child is called props drilling.

# Context API

- React context api is used to avoid props drilling.
- is kind of a global place where data is kept and all components have access to this.
- logged in user, theme, language are examples to be stored in this place.

# Redux

- Redux is not mandatory.
- When lot of read and write applications are there in the app then redux is used.
- Use redux wisely and only when requied.
- zustand is another library alternative of redux.
- Redux makes it easier to debug our application.
- A predictable State Container for JS Apps.
- Two libraries from redux:- React-Redux and Redux Toolkit.
- Redux Toolkit is also known as RTK.
- Redux store is central place and any component can access it. It is a like a very big Object in JS.

# Redux-Toolkit

- Intall redux-toolkit using npm -i @redux/toolkit
- Install redux-react using npm -i react-redux
- Build Store
- Connect Store to App
- Create slice(cart slice for this App)
- dispatch (action)
- read data (selector)

* Build Store named appStore in utils directory by using configureStore() method
  -- imported from the "redux-toolkit" as import {sonfigureStore} from "redux-toolkit",
  -- and export default appStore

* Connect the store to App using "Provider".
  -- import {Provider} from "react-redux"
  -- now import the created store file from utils to App.js
  -- now wrap your root component with <Provider store={<name_of_store} />

* Creating a slice

- create another file in utils named as cartSlice
- in this file import {createSlice} from "redux-toolkit"
- now const cartSlice = createSlice()

# Testing Code - Types of Testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e Testing

# Unit Testing

- eg:- Testing one specific component in react can be a Unit Testing.

# Integration Testing

- Testing the integration of two or more components together that
  -- collaborating with each other.

# End to End Testing - e2e Testing

- Testing the whole application with landing on the page to
  -- the complete flow of the application.
- Tools such as cyprus are needed to do this kind of testing

# React-Testing-Library

- It uses Dom-Testing-Library and Jest behined the scenes.
- Jest uses Babel.

# Setting up Testing

- Install React-Testing-Library as Dev Dependency
- Install Jest as Dev Dependency
- Install Babel dependency
- Config Babel by adding babel.config.js and add the code from the jest website
- Our babel.config.js file will conflict with parcels babel config
  -- thus parcel config will need to be edited to accomodate jest babel config.
- Configure .parcelrc file to disable default babel transpilation given by parcel.
  -- this file can be copied from parcel's website Javascript section - Babel - usage with other tools.
- Jest Configuration - npx jest --init
- Install JSDom library
- Install Babel preset for jsx in test "@babel/preset-react" to make jsx run in jest
  -- Add this preset to the babel.config.js in the preset- ["@babel/preset-react", {runtime: "automatic"}]
- Install @testing-library/jest-dom
- The Components using the Link method must be wrapped with <MemoryRouter></MemoryRouter> after importing
  -- it from the react-router-dom. eg: render(<MemoryRouter><Header/></MemoryRouter> )
- Import fireEvent from "@testing-library/react" to simulate an event like onClick.
- How to test when a component is passing props in it
  -- make a directory in the root of the project,
  -- make a file having the mock data which will be used in place of props when rendering the component
  -- now check for presence of some part of the mock data using screen.getByText() method
  -- in conjunction with expect().toBeInTheDocument() method.
- Integration Testing
  -- to test a component using fetch function you have to make a mock fetch funtion
  -- global.fetch = jest.fn(() => {
  -- -- return Promise.resolve({
  -- -- -- json: () => {
  -- -- -- -- return Promise.resolve(MockData);
  -- -- -- },
  -- -- });
  -- });
  --
  -- The components with state manangement must use and act function --import { act } from "react-dom/test-utils"--
  -- eg:-
  -- it("should render the Main component with search button", async () => {
  -- -- await act(async () => {
  -- -- -- render(
  -- -- -- -- <MemoryRouter>
  -- -- -- -- -- <Main />
  -- -- -- -- </MemoryRouter>
  -- -- -- );
  -- });
