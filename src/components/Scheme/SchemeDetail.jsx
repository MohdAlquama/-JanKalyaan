// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function SchemeDetail() {
//   const { id } = useParams();
//   const [scheme, setScheme] = useState(null);

//   useEffect(() => {
//     const sendRequest = async () => {
//       try {
//         const response = await axios.post('http://localhost:5000/api/scheme/idReqGetScheme', {
//           id: id,
//         });
//         setScheme(response.data); // Set scheme from response
//         console.log('Scheme fetched:', response.data);
        
//       } catch (error) {
//         console.error('Error fetching scheme:', error);
//       }
//     };

//     sendRequest(); // Call the function!
//   }, [id]);

//   return (
//     <div className="max-w-4xl mx-auto p-10">
//       <p className="text-gray-600 mb-2">Scheme ID: {id}</p>

//       {scheme ? (
//         <div className="mt-4 bg-gray-100 p-4 rounded shadow">
//           <h2 className="text-xl font-bold mb-2">{scheme.title}</h2>
//           <p>{scheme.description}</p>
//         </div>
//       ) : (
//         <p>Loading scheme details...</p>
//       )}
//     </div>
//   );
// }





import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SchemeDetail() {
  const { id } = useParams();
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    const fetchScheme = async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/scheme/idReqGetScheme', {
          id: id,
        });
        setSchemes(res.data); // response is an array
        console.log(res.data);
      } catch (err) {
        console.error('Error fetching scheme:', err);
      }
    };

    fetchScheme();
  }, [id]);

  if (schemes.length === 0) {
    return <div className="p-10">Loading scheme details...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
      {schemes.map((scheme) => (
        <div
          key={scheme._id}
          className="p-6 bg-white shadow-lg rounded-xl border border-gray-200"
        >
          <h1 className="text-2xl font-bold text-indigo-700 mb-2">{scheme.Description}</h1>

          <div className="text-gray-700 space-y-2">
            <p><strong>Short Info:</strong> {scheme.Description2}</p>
            <p><strong>Full Description:</strong> {scheme.Description3}</p>
            <p><strong>Scheme ID:</strong> {scheme.ID}</p>
            <p>
              <strong>Link:</strong>{" "}
              <a href={scheme.Link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {scheme.Link}
              </a>
            </p>
            <p><strong>Created At:</strong> {new Date(scheme.createdAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

