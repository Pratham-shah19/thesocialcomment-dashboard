import './App.css';
import User from './User';
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
            <img src="https://media-exp1.licdn.com/dms/image/C510BAQFpSm4EA9m6Cg/company-logo_200_200/0/1574772986100?e=2159024400&v=beta&t=9jRbeSoREUQABN78ORqOizmdxzK_bjx2mAsqn-ckmOo" className="Logo"/>

            <div>            
                <HomeIcon/>
            </div> 

            <div>  
                <ExitToAppIcon/>
            </div>

             <div>  
                <PeopleIcon/>  
            </div>

             <div>     
                <AssessmentIcon/>
            </div>

             <div>   
                <ChatIcon/>               
            </div>

            <div>       
              <SettingsIcon className="settings"/>
            </div> 
         
        </div>
        <User />
        
    </div>
  );
}

export default App;
