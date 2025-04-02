import { ComponentsProvider } from '@kaue-thums/web-ui-components';
import Routes from '@/routes/routes';

function App() {
  return (
    <ComponentsProvider defaultTheme="light">
      <Routes />
    </ComponentsProvider>
  );
}

export default App;
