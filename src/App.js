import React from 'react';
import Header from './components/header';
import About from './components/about/about';
import InitValue from './components/init-value/init-value';
import Link from './components/link/link';
import Footer from './components/footer/footer';

function App() {
    return (
        <div>
            <Header />
            <About />
            <InitValue />
            <Link />
            <Footer />
        </div>
    );
}

export default App;
