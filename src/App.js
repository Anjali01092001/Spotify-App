import './App.css';
import Sidebar from './SpotifyComponents/Sidebar';
import TopNav from './SpotifyComponents/TopNav';
import Home from './SpotifyComponents/Home';
import Search from './SpotifyComponents/Search';
import Library from './SpotifyComponents/Library';
import Playlists from './SpotifyComponents/Playlists';
import Liked from './SpotifyComponents/Liked';
import { Switch, Route } from "react-router-dom";
import Piano from './SpotifyComponents/Piano';
import Bottomnav from './SpotifyComponents/Bottomnav';
import Signup from './SpotifyComponents/Signup';
import Login from './SpotifyComponents/Login';
import Play from './SpotifyComponents/Playpopup';

function App() {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className="leftnavbar">
            <Sidebar />
          </div>
        </div>
        <div className='col'>
          <TopNav />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route path="/playlists" component={Playlists} />
            <Route path="/liked" component={Liked} />
            <Route path="/piano" component={Piano} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/play" component={Play} />
          </Switch>
        </div>
      </div>
      <Bottomnav />
    </>
  );
}

export default App;
