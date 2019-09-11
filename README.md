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