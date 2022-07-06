import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hello } from '~/components/hello';
import { SpaceX } from '~/components/spacex';

export const App: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hello />} />
                <Route path="/login" element={<div>Login</div>} />
                <Route path="/spacex" element={<SpaceX />} />
            </Routes>
        </BrowserRouter>
    );
};
