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
