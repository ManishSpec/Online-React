import axios from "axios";
import { useEffect, useState } from "react";

function TableDemo() {
    //     const users= [
    //         {
    //             id: 1260,
    //         name: "VIJAY",
    //         dept: "IT",
    //         clg: "SPEC"
    
    // },
    //         {
    //             id: 1247,
    //         name: "AJAY",
    //         dept: "IT",
    //         clg: "SPEC"
    // },
    //         {
    //             id: 1225,
    //         name: "ADARSH",
    //         dept: "IT",
    //         clg: "SPEC"
    
    // },
    //         {
    //             id: 1269,
    //             name: "RAJESH",
    //             dept: "IT",
    //             clg: "SPEC"
    //         },
    //         {
    //             id: "21BK1A1220",
    //             name: "MANISH",
    //             dept: "IT",
    //             clg: "SPEC"
    //         },
    //         {
    //             id: "21BK1A1201",
    //             name: "SAMEER",
    //             dept: "IT",
    //             clg: "SPEC"
    //         },
    //         {
    //             id: "21BK1A1237",
    //             name: "KISHORE",
    //             dept: "IT",
    //             clg: "SPEC"
    //         }
    //         ]
    interface Movie{
        Title:number;
        Year:string;
        Runtime:string;
        Poster:string;
    }
    const [userData,setuserData]=useState<Movie[]>([]);

    const [Errmsg,setErrmsg]=useState('');

    useEffect(()=>{
        axios.get<Movie[]>('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
        .then(res=>{
            console.log(res)
            setuserData(res.data)
        })
        .catch(error=>{
            console.log(error.message);
            setErrmsg(error.message)
        });
    },[]);
    
  return <div>
    <center>
    <h1>{Errmsg}</h1><br></br>
    </center>
    <table className="table">
        <thead>
            <tr className="table-primary">
                <th scope="col">TITLE</th>
                <th scope="col">YEAR</th>
                <th scope="col">DURATION</th>
                <th scope="col">POSTER</th>
            </tr>
        </thead>
        
         <tbody>
            {userData.map(eachUser => (
                        <tr>
                            <td>{eachUser.Title}</td>
                            <td>{eachUser.Year}</td>
                            <td>{eachUser.Runtime}</td>
                            <td>{<img src={eachUser.Poster} height={200} width={200}></img>}</td>
                        </tr>

                    ))}
        </tbody>
    </table>
  </div>;
}

export default TableDemo;
