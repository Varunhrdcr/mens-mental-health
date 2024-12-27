import React from 'react';

const NearbySearch = () => {
    return (
        <section id="nearby">
            <h2>Nearby Resources</h2>
            <p>
                Use our interactive map to find local therapists, support groups, and wellness events in your area.
                It's important to reach out and find help when you need it.
            </p>
            {/* Placeholder for interactive map */}
            <div style={{ height: '300px', backgroundColor: '#EFE2BA', borderRadius: '8px', textAlign: 'center', lineHeight: '300px', fontWeight: 'bold' }}>
                Interactive Map Placeholder
            </div>
        </section>
    );
};

export default NearbySearch;