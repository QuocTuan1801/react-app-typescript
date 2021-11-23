import { render } from 'react-dom';
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
const rootElement = document.querySelector("#root");
render(
        <BrowserRouter>
        <App/>
        </BrowserRouter>,
        rootElement
);
