import React from 'react';

import HeaderContainer from './HeaderContainer';
import { Route } from 'react-router-dom';
import Friends from './pages/Friends';
import Sidebar from './Sidebar';
import Music from './pages/Music';
import Gallery from './pages/Gallery';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';
import Login from './pages/Login';

const App = (props) => {
   return (
      <div className="wrapper">
         <HeaderContainer />
         <main className="page">
            <div className="page__container _container">
               <Sidebar />
               <div className="page__content content-page">
                  <Route
                     render={() => (
                        <ProfileContainer />
                     )}
                     path="/profile/:userId?"
                  />
                  <Route
                     render={() => (
                        <DialogsContainer />
                     )}
                     path="/dialogs"
                  />
                  <Route
                     render={() => (
                        <UsersContainer />
                     )}
                     path="/users"
                  />
                  <Route component={Friends} path="/friends" />
                  <Route component={Music} path="/music" />
                  <Route component={Gallery} path="/gallery" />
                  <Route render={() => <Login />} path="/login" />
               </div>
            </div>
         </main>
      </div>
   );
};

export default App;
