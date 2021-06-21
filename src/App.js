import './App.css';
import User from './User';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';


function App() {
  return (
    <div className="app_container">
        {/* sidebar wil remain stationary */}

        <div className="app__sidebar">
          <IconButton>
              <HomeIcon/>
          </IconButton>

          <IconButton>
              <ExitToAppIcon/>
          </IconButton>

          <IconButton>
              <PeopleIcon/> 
          </IconButton>

          <IconButton>
              <AssessmentIcon/>
          </IconButton>

          <IconButton>
              <ChatIcon/>
          </IconButton>

          <IconButton>
              <SettingsIcon className="settings"/>
          </IconButton>
        </div>
        <User />
        
    </div>
  );
}

export default App;
