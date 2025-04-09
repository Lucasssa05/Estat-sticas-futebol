import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerFinder from './pages/PlayerFinder.tsx';
import PlayerDetails from './pages/PlayerDetails.tsx';
import PlayerResults from './pages/PlayerResults.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/playerfinder' element ={<PlayerFinder />} />
        <Route path='/results/:searchTerm' element ={<PlayerResults />} />
        <Route path="/player/:id" element={<PlayerDetails />} />

      </Routes>
    </Router>
    
  </QueryClientProvider>

)