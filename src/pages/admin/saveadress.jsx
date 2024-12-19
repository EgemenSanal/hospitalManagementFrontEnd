import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({
        lat: 40.73061, 
        lng: -73.935242,
    });
    const [id, setId] = useState(''); 
    
    
    const getCoordinates = async (address) => {
        const apiKey = 'AIzaSyAeRSNsTSqI_QH4kwjg0_hEAWdUVq0nW3k';
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
        )}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.status === 'OK') {
                const location = data.results[0].geometry.location;
                setCoordinates({
                    lat: location.lat,
                    lng: location.lng,
                });
            } else {
                console.error('Geocoding API Error:', data.status);
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };

    // Function to save the address to the database
    const saveAddressToDatabase = async () => {
        try {
            const response = await fetch(`/api/save-address/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ address, coordinates }),
            });

            if (response.ok) {
                console.log('Address saved successfully');
            } else {
                console.error('Error saving address');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleAddressSubmit = (event) => {
        event.preventDefault();
        if (address && id) {
            getCoordinates(address);
        }
    };

    // Fetch address from the database and show on the map
    useEffect(() => {
        if (id) {
            // Fetch the address for the given ID from the database
            fetch(`/api/user/${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.address) {
                        setAddress(data.address);
                        getCoordinates(data.address);
                    }
                })
                .catch(error => console.error('Error fetching member data:', error));
        }
    }, [id]);

    const handleShowAddress = async () => {
        try {
            const response = await fetch(`/api/user/${id}`);
            const data = await response.json();
            if (data && data.address) {
                setAddress(data.address);
                getCoordinates(data.address);
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleAddressSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={id}
                    onChange={handleIdChange}
                    placeholder="Enter Member ID"
                    style={{ padding: '10px', width: '30%', marginRight: '10px' }}
                />
                <input
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Enter an address"
                    style={{ padding: '10px', width: '30%', marginRight: '10px' }}
                />
                <button type="submit" style={{ padding: '10px', marginRight: '10px' }}>
                    Show on Map
                </button>
                <button type="button" onClick={saveAddressToDatabase} style={{ padding: '10px', marginRight: '10px' }}>
                    Save Address
                </button>
                <button type="button" onClick={handleShowAddress} style={{ padding: '10px' }}>
                    Show Address
                </button>
            </form>

            <LoadScript googleMapsApiKey="AIzaSyAeRSNsTSqI_QH4kwjg0_hEAWdUVq0nW3k">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={coordinates}
                    zoom={15}
                >
                    <Marker position={coordinates} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MapComponent;
