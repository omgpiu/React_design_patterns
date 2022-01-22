import React from 'react';
import Header from './Common/Header/Header';
import { RouteComponent } from './Common/Routes/Routes';
import { SplitScreen } from './LayoutComponents/Layout/SplitScreen';


function App() {
  return (
    <SplitScreen secondSize={1} firstSize={2} isColumn>
      <Header />
      <RouteComponent />
    </SplitScreen>
  );
}

export default App;
