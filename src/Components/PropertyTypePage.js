import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PropertyTypePage = () => {
  const { type } = useParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('PropertyTypePage - Type:', type);

    const fetchData = async () => {
      try {
        // Simulate fetching data
        const data = [];
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  console.log('PropertyTypePage - Properties:', properties);

  return (
    <div>
      {/* ... Your existing rendering logic ... */}
    </div>
  );
};

export default PropertyTypePage;
