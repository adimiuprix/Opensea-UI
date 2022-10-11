import {
    Navbar,
    Header,
    Stats,
    Collectibles,
    Category,
    Footer,
} from './containers/index'
import { AppProvider } from './Context/Context'

const App = () => {
    return (
        <AppProvider>
            <div className="w-full h-full bg-primary-light dark:bg-primary-dark duration-300">
                <Navbar />
                <Header />
                <Stats />
                <Collectibles />
                <Category />
                <Footer />
            </div>
        </AppProvider>
    )
}

export default App
