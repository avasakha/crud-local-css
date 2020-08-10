import React, { Component } from 'react'
import Item from './item'
import '../App.css';
import Paint from './paint';
export default class Table extends Component {


changeHandlerRow = (item) => (event) => {
        const { users } = this.props
        const index = users.findIndex(element => element.id === item.id)
        const {target:{value, name}  } = event
        value === "" ? users[index][name] = users[index][name] : users[index][name] = value
        this.setState({ users: users.splice(index, 1, users[index]) })

    }



    editRow = item => () => {
        const { users } = this.props
        const index = users.findIndex(element => element.id === item.id)
        if (!item.isEdit) {
            users[index].isEdit = true
            this.setState({ users })
        }
        else {
            users[index].isEdit = false
            this.setState({ users })
        }



    }


    deleteRow = id => () => {
        const { users } = this.props
        const index = users.findIndex(item => item.id === id)
        this.setState({
            users: users.splice(index, 1)
        })
    }




    render() {

        const { users } = this.props
        console.log(users)
        return <>



            {users.map(item => {

                return <>

                    <div>

                        {!item.isEdit ?
                            <div className="items">
                                <Item item={item} editRow={this.editRow} deleteRow={this.deleteRow} />
                            </div>
                            : <>

                                <div className="edit-row" >
                                    
                                    <Paint changeHandlerRow={this.changeHandlerRow} editRow={this.editRow} item={item} />

                                </div>


                            </>}
                    </div>



                </>



            })}


        </>
    }
}