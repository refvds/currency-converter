import styled from 'styled-components';
import Converter from './components/Converter';

const AppWrapper = styled.div`
  background-color: var(--bg-color);
  background-image: var(--bg-img);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppWrapper>
      <Converter />
    </AppWrapper>
  );
}

export default App;
