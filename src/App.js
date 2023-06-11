import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import Submission from './pages/Submission.jsx'

function App() {
	return (
		<Routes>
			<Route path="/" element={
				<div>
					<Loader />
					<NavBar />
					<Home />
					<About />
					<Projects />
					<Contact />
					<Footer />
				</div>
			} />
			<Route path="/submission" element={<Submission />}/>
		</Routes>
	)
  }  

export default App;