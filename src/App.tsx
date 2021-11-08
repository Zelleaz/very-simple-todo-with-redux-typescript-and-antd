import React from 'react';
import {Provider} from "react-redux";
import {store} from "./Store/store";
import AppRoutes from "./Routes/AppRoutes";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </BrowserRouter>
    );
};

export default App;