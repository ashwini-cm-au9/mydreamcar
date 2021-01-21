import {BrowserRouter,Route} from 'react-router-dom';
import Search from './Dataa';

const Routs_ = () => {
    return ( <BrowserRouter>
                    <Route path="/" component={Search} />
            </BrowserRouter> );
}
 
export default Routs_;