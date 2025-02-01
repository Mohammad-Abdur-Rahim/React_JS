export default function User({user}){
    // console.log(user);
    const {name,email} = user;
    return (
        <div style={{border:'1px solid red', padding:'20px', margin:'10px'}}>
            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
            
        </div>
    )
} 