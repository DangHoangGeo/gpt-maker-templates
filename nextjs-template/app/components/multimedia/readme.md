
In this ImageGallery component:

The images prop accepts an array of image URLs.
The selectedIndex state keeps track of the currently selected or viewed image.
previousImage and nextImage functions allow the user to navigate through the images.
Usage example in an application:

```
const App: React.FC = () => {
  const galleryImages = [
    'url_to_first_image.jpg',
    'url_to_second_image.jpg',
    'url_to_third_image.jpg',
    // more image URLs...
  ];

  return (
    <div className="App">
      <ImageGallery images={galleryImages} />
    </div>
  );
};
```