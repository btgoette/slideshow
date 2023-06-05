import SlideShow from 'components/SlideShow'

let slides = [{
  img: ""
}]

export default function Home() {
  return (
    <main>
      <SlideShow {...slides} />
    </main>
  )
}
