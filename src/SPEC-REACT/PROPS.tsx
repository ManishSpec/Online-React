interface Props{
    name:string
    roll:number
    dept:string
    clg:string
}
const gap='     '
function PROPS({name,roll,dept,clg}:Props) {
    return<h1>{name}{gap}{roll}{gap}{dept}{gap}{clg}</h1>
}
export default PROPS;
// THE INTERFACE "PROPS" IS USED TO PASS THE VALUES OR PARAMETERS.
// WE HAVE TO DECLARE THE VALUES IN THE INTERFACE PROPS.
