# 🔥 Redux Basic (Basic Implementation)

This repository demonstrates a **basic Redux setup** in a React application using a **two reducer file** for state management.

## 📚 What is Redux?
Redux is a predictable **state management** library that helps manage application state globally. It consists of:  
- **Actions** – Describe what changes in the state.  
- **Reducers** – Handle how the state updates based on actions.  
- **Store** – Holds the application state in one central place.  

---

## 🚀 Project Setup

### 1️⃣ Install Dependencies  
Set up a React app and install Redux and React-Redux.  

```sh
npx create-vite@latest redux-basic
cd redux-basic
npm install redux react-redux
```

### 2️⃣ Project Structure  
The project follows a structured approach with separate files for store, reducer, and components.
```
/redux-basic
│── /src
│   ├── /store
│   │   ├── reducers     # Single reducer managing multiple states
│   │   ├── store.js     # Creates Redux store
│   │   ├── actions.js   # Defines Redux actions
│── /components
│   ├── Counter.jsx      # Uses counter state
│   ├── Auth.jsx         # Uses auth state
│── App.jsx              # Main app component
│── Main.jsx             # React entry point
```

---

## 📌 Redux Flow (Single Reducer Approach)

1. **Create a Store**  
   - The store holds the application's state and is connected to the reducer.

2. **Define the Reducer**  
   - The reducer manages different states, such as a counter and authentication status.

3. **Dispatch Actions**  
   - Actions are triggered from components to modify the global state.

4. **Use Redux in React Components**  
   - Components access the state and dispatch actions using React-Redux hooks.

5. **Connect Redux to React**  
   - The Redux store is provided to the entire application using the Provider component.

---

## 🛠 How to Run the App
Start the development server and access the app in a browser.

```sh
npm start
```

---

## 🔗 Official Redux Docs
- **Redux Docs:** [Redux Documentation](https://redux.js.org/)
- **React-Redux Docs:** [React-Redux Documentation](https://react-redux.js.org/)

---

## 💡 Why Use Redux?
✔ **Centralized state management**  
✔ **Predictable updates with pure functions**  
✔ **Scalable and structured application architecture**  
✔ **Debugging with Redux DevTools**  

---

## 📜 Contribute
1. **Fork this repository.**  
2. **Clone the repo and create a new branch.**  
3. **Make changes and commit them.**  
4. **Push to your fork and submit a pull request.**  

---

Happy coding! 🚀🔥

