/** Components */
import MainNavigation from './main-navigation';

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      <div id="notifications"></div>
    </>
  );
};

export default Layout;
