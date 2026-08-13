import React from 'react';
import ChildComponent from './ChildComponent';
function ParentComponent() {
  return (
    <div>
      <ChildComponent name="React Props Example" />
    </div>
  );
}
export default ParentComponent;
import React from 'react';
function ChildComponent(props) {
  return <h1>Message: {props.name}</h1>;
}
export default ChildComponent;