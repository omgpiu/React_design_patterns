import { SplitScreen } from './SplitScreen';
import React from 'react';
import { LeftSideComponent, RightSideComponent } from './Components';

const Layout = () => {
  return (
    <>
      <SplitScreen firstSize={1} secondSize={3}>
        <LeftSideComponent side='Left side Component/First Child' />
        <RightSideComponent side='Right side Component/Second Child' />
      </SplitScreen>
    </>
  );
};

export default Layout;
