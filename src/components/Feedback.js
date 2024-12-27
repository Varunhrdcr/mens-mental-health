import React from 'react';

const Feedback = () => {
    return (
        <section id="feedback">
            <h2>Your Feedback Matters</h2>
            <p>Please share your experiences or suggestions with us. Your input helps us improve our services.</p>
            {/* Placeholder for feedback form */}
            <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                <textarea placeholder="Your feedback..." rows="4" required style={{ marginBottom: '10px', padding: '10px' }}></textarea>
                <button type="submit" style={{ backgroundColor: '#F13C20', color: '#fff', border: 'none', padding: '10px' }}>Submit Feedback</button>
            </form>
        </section>
    );
};

export default Feedback;