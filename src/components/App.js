import React from 'react';

import HeaderContainer from './HeaderContainer';
import Profile from './Profile/Profile';
import { Route } from 'react-router-dom';
import Friends from './pages/Friends';
import Sidebar from './Sidebar';
import Dialogs from './Dialogs/Dialogs';
import Music from './pages/Music';
import Gallery from './pages/Gallery';
import DialogsContainer from './Dialogs/DialogsContainer';
import ProfileContainer from './Profile/ProfileContainer';
import UsersContainer from './Users/UsersContainer';

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
               </div>
            </div>
         </main>
      </div>
   );
};

export default App;
