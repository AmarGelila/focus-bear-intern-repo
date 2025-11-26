import Counter from "./features/Counter/Counter";
import Posts from "./features/Posts/Posts";

import { Provider } from "react-redux";
import { store } from "./app/Store";
function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
