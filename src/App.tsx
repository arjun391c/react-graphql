import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
//pages
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
//component
import Header from './components/header/Header';
import SignInPage from './pages/signInPage/SignInPage';
//utils
import { auth, createUserProfileDocument } from './utils/firebase'
import { IFirebaseUser } from './utils/types/firebaseUser'

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<IFirebaseUser | {} | null>({})

  useEffect(() => {
    const subscribeAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)

      createUserProfileDocument(user)
    })

    return subscribeAuth
  }, [])

  return (
    <div> 
      <Router>
        <Header currentUser={currentUser}/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
