import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Jokes from "./components/jokes";
import "./App.css";

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Jokes />
        </Provider>
    );
}

export default App;
