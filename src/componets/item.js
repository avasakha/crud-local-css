import React from 'react'
export default function Item(props) {

    const { item, deleteRow, editRow } = props
    return <>

        <span key={item.firstName}>{item.firstName}</span>
        <span key={item.lastName}>{item.lastName}</span>
        <span key={item.email}> {item.email}</span>
        <span key={item.id}>
            <button onClick={deleteRow(item.id)}>X</button>
            <button onClick={editRow(item)}>Edit</button>
        </span>


    </>

}