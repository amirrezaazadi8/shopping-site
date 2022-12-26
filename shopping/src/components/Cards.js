import React, { Component } from 'react';
import style from "./Cards.module.css";
import Card from "./Card";
import iphone10 from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            phoneData: [
                { image: iphone10, name: "Iphone 10", price: "600 $", id: 1 },
                { image: iphone11, name: "Iphone 11", price: "700 $", id: 2 },
                { image: iphone12, name: "Iphone 12", price: "800 $", id: 3 },
                { image: s21, name: "S21 ultra", price: "900 $", id: 4 }
            ]
        }
    }
    render() {
        return (
            <div className={style.container}>
                {this.state.phoneData.map(phone =>
                    <Card
                        key={phone.id}
                        image={phone.image}
                        name={phone.name}
                        price={phone.price}
                        id={phone.id}>
                    </Card>)}
            </div>
        )
    }
}

export default Cards;