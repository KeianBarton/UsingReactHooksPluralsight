# Using React Hooks
https://pluralsight.com/library/courses/using-react-hooks/table-of-contents

## Notes

Note the hooks work on functional components instead of class components.
They let you use state and other React features without writing a class:

https://reactjs.org/docs/hooks-intro.html

### Course covers:

- Basic built in React Hooks
- More advanced Hooks
- Comparing Hooks
- Building your own React Hooks

### Running next app

To run our Next.js app, run the command line "npm run start" or "npm run dev" - see the package.json file

### Pure components:

Pure components guarantee no side effects - you can run the same component with the same parameters again and again and get the exact same behaviour.
Functional components can be free of side effects (and hence a pure component).

React Hook useEffect causes side effects - a function executes upon component instantiation and a function exceutes upon component completion.
Adding and removing DOM listeners is a great use case for useEffect.

### Do React Hooks add new functionality?

No - but simplifies code and React Hooks are here to stay.
But we do not need to re-write our code to avoid using class based components.

## Basic Usage and Rules

https://reactjs.org/docs/hooks-rules.html
- Only call Hooks at the top level (no nesting inside loops, conditions)
- Only call Hooks from React functions (not from regular JavaScript functions)

## useReducer

- useState is build with useReducer under it
- A reducer takes in a previous state, an action and returns a new state:

`(previousState, action) => newState`

## Migrating existing apps to react Hooks

- `useState` equivalent in class components using setState:

```javascript
state = {
    inputText: ""
}

handleChange = event => {
    this.setState({
        inputText: event.target.value
    });
};
```

- `useRef` equivalent in class components using React.createRef:

```javascript
class MyComp extends React.Component {
    render() {
        const imageRef = React.createRef();
        return <img src="x.png" ref={imageRef} />;
    }
}
```

- `useEffect` equivalent in class components:

```javascript
class MyComp extends React.Component {
    componentDidMount() {
        console.log("mounting");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("dependency-chk");
        // relates to dependency array in useEffect
    }
    componentWillUnmount() {
        console.log("dismounting");
    }
}
```

## Axios can be used for writing RESTful API calls and responses

See code here for a custom hook that uses Axios to run a fetch:
https://github.com/pkellner/pluralsight-course-using-react-hooks/blob/master/05-Combing-React-Hooks-REST-Example/clip6-revising-speaker-favorite-update/src/useAxiosFetch.js

Here is where it is implemented
https://github.com/pkellner/pluralsight-course-using-react-hooks/blob/master/05-Combing-React-Hooks-REST-Example/clip6-revising-speaker-favorite-update/src/Speakers.js
Note that we in the RESTful response of a fetch, a URL for a put is provided

This code uses Json server to mimic a server for changing data in a JSON file
https://github.com/typicode/json-server


## An example of authentication is given

https://github.com/pkellner/pluralsight-course-using-react-hooks/tree/master/06-Adding-Authentication-Login-With-Hooks-Support

Email is provided in the context and extracted with useContext

Recommends looking at securing React Apps with AuthO:
https://app.pluralsight.com/library/courses/react-auth0-authentication-security/table-of-contents

Uses Passport:
http://www.passportjs.org/