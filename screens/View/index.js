import React from 'react';
import ViewList from '../../components/ViewList.js';

const ViewScreen = ( {user} ) => {
    
    return (
        // put section for full screen
        <section className="slice slice-lg" key="test">
            <ViewList uuid={user.uid} />
      </section>
      );
}

export default ViewScreen;