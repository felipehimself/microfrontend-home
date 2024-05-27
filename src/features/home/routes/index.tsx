import { Route, Routes } from 'react-router-dom';
import { Home } from './home';

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      {/* You could have multiples routes here which would have /home as the base route */}
    </Routes>
  );
};
