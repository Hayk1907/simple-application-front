import {BrowserRouter, Route} from 'react-router-dom';
import SignIn from './pages/Account/SignIn';
import SignUp from './pages/Account/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  );
}

export default Router;
