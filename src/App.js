import SauvetageForm from "./Components/SauvetageForm/Index";
import 'antd/dist/antd.css'; 
import {Toaster} from 'react-hot-toast'
import Sauvetages from "./Components/Sauvetages";


function App() {
  return (
    <div className="App">
     <Toaster/>
     <Sauvetages/>
     {/* <SauvetageForm/> */}
    </div>
  );
}

export default App;
