import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {
            cosmetics.map((cosmetic) => <Cosmetic cosmetic={cosmetic} key={cosmetic._id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;