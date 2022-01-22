import { Route, Routes } from 'react-router';
import { Layout } from '../../LayoutComponents';
import React from 'react';

import Lists from '../../LayoutComponents/Lists/Lists';
import ModalsExample from '../../LayoutComponents/Modal/ModalsExample';
import { Address } from '../enums';
import { Containers } from '../../ContainerComponent';
import Forms from '../../ControlledUncontrolled/Forms';

export const RouteComponent = () => {
  return (
    <Routes>
      <Route path={'/'} element={<div>Hello</div>} />
      <Route path={Address.Layout} element={<Layout />} />
      <Route path={Address.Lists} element={<Lists />} />
      <Route path={Address.Modal} element={<ModalsExample />} />
      <Route path={Address.Container} element={<Containers />} />
      <Route path={Address.Forms} element={<Forms />} />
    </Routes>
  );
};
