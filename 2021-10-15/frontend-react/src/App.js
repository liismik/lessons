import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from './pages/Posts';
import ShowPosts from './pages/ShowPosts';
import ShowMagic from './components/ShowMagic';
import 'antd/dist/antd.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from "./components/Header";

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Route path="/">
        <Header/>
      </Route>
          <Switch>
            <>
              <Route exact path="/">
                <ShowMagic/>
              </Route>
              <Route exact path="/posts">
                <Posts/>
              </Route>
              <Route exact path="/showposts">
                <ShowPosts/>
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
            </>
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
