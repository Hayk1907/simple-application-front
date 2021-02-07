import {BrowserRouter, Route} from 'react-router-dom';
import {SignIn, SignUp} from './pages';
import Layout from './components/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
