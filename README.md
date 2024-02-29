
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

## Tailwindcss installation

```npm install -D tailwindcss postcss autoprefixer``` - 
adds tailwindcss and postcss packages

```npx tailwindcss init -p``` - 
creates tailwindcss and postcss config file

## Tailwindcss config

add the path of template files. Doing so allows the internal feature, PurgeCSS, to remove any unused CSS style in the final CSS bundle leading to smaller file size.

```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives. Tailwind directives enables tailwind utility classes for use.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

To use tailwindcss within a JSX file, a CSS file with tailwind directives must be imported.

# installing branch without package.json steps

```npm init -y```
- install needed packages
- the flag -y accepts all prompts by default

# Why keep package.json in branch
Hastes development convienience by having needed packages for installation and configurations for postcss, tailwindcss, etc.

# React Component
When using and building a React Component, their PropType attribute must be defined.
This secures what data is to be expected from one component to another.

Example of defining a PropType

```

```

# Gradient Color in a HTML Tag via coolors.co
Example of coolors.co CSS Snippet

```
 backgroundImage: 'linear-gradient(90deg, hsla(23, 62%, 70%, 1) 0%, hsla(9, 81%, 23%, 1) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent'
 ```

Integration of CSS snippet in a HTML tag
```
                    <h1 className="font-bold p-8"style={{ backgroundImage: 'linear-gradient(90deg, hsla(23, 62%, 70%, 1) 0%, hsla(9, 81%, 23%, 1) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>Welcome to the Homepage</h1>
```

Important things to note, the following are the background prop equivalent:

`backgroundImage` : linear-gradient

`backgroundClip` : type

`WebkitBackgroundClip` : fill-color

`color` : color

`WebkitTextFillColor` : color