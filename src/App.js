import { Helmet } from 'react-helmet';

import {Contact} from "./contact"
import './App.css';
import { Contactall } from './contactall';

function App() {

  return (
    <div className="App">
      <Helmet>
        <meta name="description" content='React Application'/>
        <title>Home Page</title>

      </Helmet>

<Contact/>
      
      <Contactall/>
    </div>
  );
}

export default App;
