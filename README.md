
# Using React Router v6 in App Route


```
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
```

Router - Specifies the Routing strategy, Routes are defined within it's encapsulation, for example
```
<Router> 
    
    <Routes>
      <Route exact path="/" element={<Homepage />}/>
      <Route path="/likes" element={<Likes />}/>
    </Routes>
    </Router>
```
Routes - wraps Route components in a container

Route - Renders the component as a Route



