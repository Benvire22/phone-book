import React, {PropsWithChildren} from 'react';
import ToolBar from '../ToolBar/ToolBar';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container-xl py-5">
        {children}
      </main>
    </>
  );
};

export default Layout;