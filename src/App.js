import { NavBar, Home, About, Projects, Contact, Footer, Loader } from "./components/index"

function App() {
	return (
		<div>
			<Loader />
			<NavBar />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App