import { UserInfoProvider } from './context/UserInfo';
import Screen from './Screen'


function App() {
  return (
    <UserInfoProvider >
      <Screen />
    </UserInfoProvider>

  );
}

export default App;

