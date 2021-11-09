import "./App.scss";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeThunkCreator } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { Suspense } from "react";


const PersonContainer = React.lazy(() =>
  import("./components/Person/PersonContainer")
);

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", function (event) {
      console.warn(
        "Внимание: Необработанная ошибка Promise. Позор вам! Причина: " +
          event.reason
      );
    });
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", function (event) {
      console.warn(
        "Внимание: Необработанная ошибка Promise. Позор вам! Причина: " +
          event.reason
      );
    });
  }

  render() {
    if (!this.props.initiaized) {
      return <Preloader />;
    }
    return (
      // заменить на BrowserRouter при билде basename={process.env.PUBLIC_URL}
      <HashRouter>
        <div className="wrapper">
          <HeaderContainer />
          <div className="content__wrapper">
            <SidebarContainer />
            <Suspense fallback={<div>Загрузка...</div>}>
              <Switch>
                <Redirect exact from="/" to="/person" />
                <Route
                  path="/person/:userId?"
                  render={() => <PersonContainer />}
                />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/users" render={() => <UsersContainer />} />
                {/* <Route path="/login/Facebook" render={() => <div>Facebook</div>} /> */}
                <Route path="/login" render={() => <Login />} />
                <Route exact path="*" render={() => <div>404 not found</div>} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </HashRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  initiaized: state.app.initialized,
});

export default compose(
  connect(mapStateToProps, { initializeApp: initializeThunkCreator })
)(App);
