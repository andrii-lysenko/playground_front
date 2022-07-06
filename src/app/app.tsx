import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hello } from '~/components/hello';

export const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hello />} />
                <Route path="/login" element={<div>Login</div>} />
            </Routes>
        </BrowserRouter>
    );
};
