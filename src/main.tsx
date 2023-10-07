import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Store from './store/store.ts'

interface State {
	store: Store
}

const store = new Store()

export const Context = createContext<State>({
	store,
})

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Context.Provider
			value={{
				store,
			}}
		>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Context.Provider>
	</BrowserRouter>
)
