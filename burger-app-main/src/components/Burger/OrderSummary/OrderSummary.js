import React from 'react';
import Auxi from '../../../hoc/Auxi'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalized'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>
        });

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinues}>CONTINUE</Button>
        </Auxi>
    )
};

export default orderSummary;