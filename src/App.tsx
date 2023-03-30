// Home
import { Home } from './home';

// Toast
import { ToastContainer } from 'react-toastify';

// GlobalStyles
import { GlobalStyles } from "./styles/globalStyles"

function App() {
    return (
        <>
            <GlobalStyles />
            <ToastContainer />
            <Home />
        </>
    )
}

export default App;
