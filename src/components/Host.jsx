import React from 'react'

export default function Host (props) {
    


        const { name, picture } = props;
		const firstName = name.split(' ')[0];
		const lastName = name.split(' ')[1];

        return (
            <div className="apartmentHost">
                <div className="apartmentHostName">
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </div>
                <img className="apartmentHostImg" src={picture} alt={name} />
            </div>
        )
    
}
