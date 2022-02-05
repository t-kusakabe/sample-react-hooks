// import { memo } from 'react';

interface ChildProps {
  handleClick: any;
}

export const Child = (props: ChildProps) => {
  console.log('Child Components.');

  return (
    <div>
      <button onClick={props.handleClick}>Child</button>
    </div>
  );
};
