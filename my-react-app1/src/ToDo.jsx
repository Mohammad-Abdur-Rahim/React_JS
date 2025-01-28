// export default function ToDo({ todo ,isDone }) {
//     return (
//         <>

//             <li>1. {todo.html}</li>
//             <li>2. {todo.css}</li>
//             <li>3. {todo.js}</li>
//             <li>4. {todo.react}</li>


//         </>
//     );
// // }
// export default function ToDo({ todo ,isDone }) {
//    if(isDone===true){
//     return <li>Complete :{todo.html}
//     </li>
//    }
//    else{
//     return <li>work on :{todo.html}</li>
//    }
// }
export default function ToDo({ todo ,isDone }) {
return (

    <li>{isDone?'Finshed':'work on'} : {todo.html}</li>
)

}