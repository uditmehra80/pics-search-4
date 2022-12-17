function ImageShow({ image }) {
  return (
    <div>
      <img src={image.urls.regular} alt={image.alt_description} loading="lazy" />
    </div>
  );
}

export default ImageShow;
