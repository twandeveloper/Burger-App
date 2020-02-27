import React, { Component } from "react";
import axios from '../../../axiosOrders'
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner'
import Input from '../../../UI/Input/Input'

import classes from './ContactData.css'


class ContactData extends Component {
    state = {
        orderForm: {

            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zipcode'
                },
                value: '',
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: '',
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                },
                value: '',
            }
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
           
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/');
            } )
            .catch(error => {
                this.setState({loading: false})
                console.log(error);
                
            })
        
    }

    render ()  {
        let form = (
                <form>
                    <Input elementConfig='...' elementConfig='...' value='...'/>
                    <Input inputtype='input' type='text' name='street' placeholder='Street'/>
                    <Input inputtype='input' type='text' name='name' placeholder='Your Name'/>
                    <Input inputtype='input' type='text' name='postal' placeholder='Postal Code'/>
                    <Button btnType='Success' clicked={this.orderHandler}>Order</Button>
                </form>);
        if (this.state.loading) {
        form =  <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData