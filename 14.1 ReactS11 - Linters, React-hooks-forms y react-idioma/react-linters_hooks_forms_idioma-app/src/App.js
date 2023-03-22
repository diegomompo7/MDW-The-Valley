import './App.scss';
import Register from './components/Registrer';
import React from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'es-ES':
    defaultMessages = Spanish;
    break;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <Register></Register>
      </div>

      <h2>Selector de idioma</h2>
      <button onClick={() => setMessages(Spanish)}>Spanish</button>
    </IntlProvider>
  );
}
export default App;
