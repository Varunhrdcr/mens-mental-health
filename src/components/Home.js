import React from 'react';

const Home = () => {
    return (
        <section id="home">
            <h2>Welcome to Men's Mental Health</h2>
            <p>
                We are dedicated to promoting mental wellness among men. 
                Explore resources, connect with others, and take the first step towards a healthier mindset.
            </p>
            <button onClick={() => window.location.href = '#nearby'}>Find Help</button>
            <button onClick={() => window.location.href = '#funds'}>Get Involved</button>
        </section>
    );
};

export default Home;