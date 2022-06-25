import { Header } from './components/header';
import { Video } from './components/video';
import { Sidebar } from './components/sidebar';
import { Event } from './pages/Event';
import { Router } from './Router';
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
function App() {
  return (
    <div>
      <ApolloProvider  client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}
export default App
