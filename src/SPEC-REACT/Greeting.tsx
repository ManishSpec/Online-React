interface Props{
    messaage :String;
    id:String;
}
function Greeting(_prop:Props){
    const emps=[{id:100,name:"Hari",age:21},{id:102,name:"Raju",age:27},{id:103,name:"Ravi",age:30}];

    return(
        <div>

<table className="table" cellPadding="10px">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">AGE</th>
      
    </tr>
  </thead>
  <tbody>

    {emps.map((emp)=>(
        <tr>
            <th scope="row">{emp.id}</th>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
        </tr>
    ))}
   
    
  </tbody>
</table>
            
        </div>
    );

}
export default Greeting;