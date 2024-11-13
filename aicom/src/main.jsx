import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter , Routes,Route} from 'react-router-dom';

// Import your components
import Landing from './Landing';
import Recharge from './Recharge';
import Speed from './Speed';
import Mob from './Mob';
import LoginForm from './LoginForm';
import CustomerHelp from './CustomerHelp'; // Uncomment this if you want to include this page

// Create the root and set up routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap the app with Router */}
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Landing />} /> {/* Default route for landing */}
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/speed" element={<Speed />} />
        <Route path="/mob" element={<Mob />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/customerhelp" element={<CustomerHelp />} /> {/* Uncomment this if you want it */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
