
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

```<Routes></Routes>``` - wraps Route components in a container

```<Route></Route>``` - Renders the component as a Route

```element=``` - a prop that specifies the react element to render when route matches
- expects any JSX expression
```component=``` - a prop that defines the value as a react component
- expects a react component class or function component

```element= vs component=``` - ```element=``` is highly favored as it provides more flexibility in defining what is a react component without needing to create additional components
