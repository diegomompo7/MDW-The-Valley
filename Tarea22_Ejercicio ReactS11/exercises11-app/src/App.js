import './App.css';
import Register from './components/Registrer';
import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'fr-FR':
    defaultMessages = French;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = English;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <header className='App-header'>
          <Register></Register>
          <h2>
            <FormattedMessage id='app:language_selector'></FormattedMessage>
          </h2>
          <button onClick={() => setMessages(Spanish)}>
            <FormattedMessage id='app:spanish'></FormattedMessage>
          </button>
          <button onClick={() => setMessages(English)}>
            <FormattedMessage id='app:english'></FormattedMessage>
          </button>
          <button onClick={() => setMessages(French)}>
            <FormattedMessage id='app:french'></FormattedMessage>
          </button>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
