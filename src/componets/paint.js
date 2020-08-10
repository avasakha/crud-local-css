import React from 'react'
export default function Paint (props){
    const {firstName,lastName,email,changeHandler,changeHandlerRow,editRow,item,submitHandler,cancleRow}=props
return <>

<input  onChange={item?item.isEdit?changeHandlerRow(item):changeHandler:changeHandler} value={firstName} name='firstName' placeholder={item?item.isEdit?`${item.firstName}`:'firsname':'firstName'}></input>
<input  onChange={item?item.isEdit?changeHandlerRow(item):changeHandler:changeHandler} value={lastName}  name='lastName'  placeholder={item?item.isEdit?`${item.lastName}`:'lastname':'lastName'}></input>
<input  onChange={item?item.isEdit?changeHandlerRow(item):changeHandler:changeHandler} value={email}     name='email'    placeholder={item?item.isEdit?`${item.email}`:'email':'email'}></input>
<div className="footer">
  <div className="right">
<span><button onClick={item?item.isEdit?editRow(item):submitHandler:submitHandler}  className="span">Save</button></span>
<span><button onClick={item?item.isEdit?editRow(item):cancleRow:cancleRow}  className="span">Cancle</button></span>
  </div>
</div>
   
</>

}