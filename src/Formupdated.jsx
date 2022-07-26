import React, { useState } from "react";

function Formupdate() {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
  });

  const change = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log(value);
    // console.log(name);

    // else if (name === "Lname") {
    //   console.log(value);
    //   console.log(name);
    //   setfullname("lname" = value);
    // }
    setfullname((preValue) => { 
      if (name === "Fname") {
        return {
          ...preValue ,
          fname: value,
          // lname: preValue.lname,
        };
      } else if (name === "Lname") {
        return {
          ...preValue ,
          lname: value,
          // fname: preValue.fname,
        };
      }
    });
    
    
    
    
  };
  
  
  
  
  
  // ---------------------Remembe the function---------------------
  const onsubmit = (event) => {
    event.preventDefault();
  };
  console.log(fullname);
  
  return ( 
    <>
      <div>
        <form onSubmit={onsubmit}>
          <label>
            Hello {fullname.fname} {fullname.lname}{" "}
          </label>
          <input name="Fname" onChange={change} type="text" />
          <br />

          <input name="Lname" onChange={change} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Formupdate;





// if (name === "Fname") {
//   // console.log(value);
//   // console.log(name);

//   setfullname((preV) => {
//     return { ...preV, fname: value, lname: value };
//   });
// }

////////////////////////////////////////////
// ---------------------Remembe the function---------------------
///------------------First Approach
//  setfullname ((preValue) =>{
  //   if (name === "Fname")
  //   {
//        return{
  //           fname : value,
  //           lname   : preValue.lname , 
//        };

//       }
//       else if (name === "Lname")
//       {
  //           return{
//            lname : value,
//           fname :  preValue.fname,

//           };

//   }
//  })
/////////////////////////////////

///------------------Second Approach
// if (name === "Fname")
// {
//   setfullname({...fullname , fname : value})
// }
// if (name === "Lname")
// {
//   setfullname({...fullname , lname : value})
// }