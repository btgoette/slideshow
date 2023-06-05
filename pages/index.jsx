import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: "http://placekitten.com/1920/1080",
    thumbnail: "http://placekitten.com/250/150",
  },
  {
    original: "http://placekitten.com/1920/1080",
    thumbnail: "http://placekitten.com/250/150",
  },
  {
    original: "http://placekitten.com/1920/1080",
    thumbnail: "http://placekitten.com/250/150",
  },
  {
    original: "http://placekitten.com/1920/1080",
    thumbnail: "http://placekitten.com/250/150",
  },
  {
    original: "http://placekitten.com/1920/1080",
    thumbnail: "http://placekitten.com/250/150",
  },
  {
    original: "http://placekitten.com/1920/1080",
    thumbnail: "http://placekitten.com/250/150",
  }
]

export default function Home() {
  return (
    <main>
      <ImageGallery items={images} />
    </main>
  )
}
