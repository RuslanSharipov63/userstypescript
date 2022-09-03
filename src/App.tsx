import Autorization from './components/autorization/Autorization';
import { Provider } from "react-redux";
import { store } from './../src/store/store';
import UserList from './components/users/UsersList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Autorization />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Router>
    </Provider >

  );
}

export default App;
