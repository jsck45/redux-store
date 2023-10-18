// import { createContext, useContext, useReducer } from "react";
// import { reducer } from './reducers'

import { Provider } from 'react-redux';
import store from './store';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };

export default function StoreProvider(props) {
  return <Provider store={store} {...props} />;
}