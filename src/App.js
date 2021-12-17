import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from "./components/ImageSearch"


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
      setIsLoading(true)
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch(err => console.error('ERROR',err))
  }, [term]);

  const searchText = (text) => {
    setTerm(text);
  }

  return (
    <div className="container mx-auto px-2 py-4">
      <ImageSearch searchText={searchText}/>
          {!images.length && (<h1 className="text-6xl text-center mx-auto text-purple-500 mt-40">No images found</h1>)}
      {
        isLoading 
        ? <h1 className="text-6xl text-center mx-auto text-purple-500 mt-40 italic animate-pulse">LOADING...</h1>
        :
        <div className="grid grid-cols-3 gap-4">
        {images && 
          images.map(image => <ImageCard key={image.id} image={image}/>)
        }
        </div>
      }
      
    </div>
  );
}

export default App;
