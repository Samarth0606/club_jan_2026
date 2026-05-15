function Cart({age , isSofa}) {
    console.log(age);
    console.log(isSofa);
    
  return (
    <div style={{color:"red", border:"2px solid black"}}>
        <h1>Age: {age}</h1>
        <h1>isSofa: { JSON.stringify(isSofa) }</h1>
    </div>
  )
}

export default Cart

// --------------------------------------

// function Cart(props) {
//     console.log(props); //object 
//     console.log(props.isSofa);
//     console.log(props.age);
    
    
//   return (
//     <div>
//         <h1>Age: {props.age}</h1>
//         {/* <h1>isSofa: { JSON.Stringify(props.isSofa) }</h1> */}
//         <h1>isSofa: { JSON.stringify(props.isSofa) }</h1>
//     </div>
//   )
// }

// export default Cart