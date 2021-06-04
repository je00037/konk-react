import './App.css';
import KevContainer from './KevContainer.js';
import QuoteContainer from './QuoteContainer';

const AppContent = () => {
  return (
    <div className='App-content'>
      <KevContainer />
      <QuoteContainer />
    </div>
  );
}

export default AppContent;