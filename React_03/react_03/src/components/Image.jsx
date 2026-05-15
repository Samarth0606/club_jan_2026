// Build a React component to display an image with a caption. 
// The image and caption should be passed as props.

// const imageLink =
//   'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
// const caption = 'Spring Flowers'

function Image({imageLink, caption}) {
    
  return (
    <div>
        <figure>
            <img width={200} src={imageLink} alt="img" />
            <figcaption> {caption} </figcaption>
        </figure>
    </div>
  )
}

export default Image



