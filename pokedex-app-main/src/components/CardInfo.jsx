import React from 'react';

function CardInfo({ weight, height }) {
    return (
        <div className="card-info">
            <p className="weight-height">
                Peso: {weight} kg, 
                <p>Altura: {height} cm</p>
            </p>
        </div>
    );
}

export default CardInfo;
