// MyComponent.tsx
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { myState } from './mystate';
import Landing from './components/landingPage/landingpage';

const MyComponent: FC = () => {
  const [state, setState] = useRecoilState(myState);

  return (
    <div>
      <Landing/>
    </div>
  );
}

export default MyComponent;