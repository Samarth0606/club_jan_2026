// import Cart from "./components/Cart"
import Image from "./components/Image"

function App() {

    const imageLink ='https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
    const caption = 'Spring Flowers'

  return (
    <div>
      {/* <Cart age={112} isSofa={true} />
      <Cart age={101} isSofa={false} />
      <Cart age={887} isSofa={true} /> */}

      <Image imageLink={imageLink} caption={caption} />
    </div>
  )
}

export default App