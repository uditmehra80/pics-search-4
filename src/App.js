import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (term) => {
    setLoading(true);
    const result = await searchImages(term);
    setImages(result);
    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <h1>Loading...</h1>}
      {images.length === 0 && <h2>data not found</h2>}
      <ImageList images={images} />
    </div>
  );
}

export default App;
