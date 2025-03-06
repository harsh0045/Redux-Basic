// Action Types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// Counter Actions
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// Auth Actions
export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
