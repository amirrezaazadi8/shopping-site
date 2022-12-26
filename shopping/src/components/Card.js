import React, { Component } from 'react';
import style from "./Card.module.css";
import Plus from "../images/plus.png";
import Negative from "../images/negative.png";
import { Link } from 'react-router-dom';


class Card extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    downHandler = () => {
        if (this.state.count >= 1) {
            this.setState(prevState => ({
                count: prevState.count - 1,
            }))
        }
    }
    upHandler = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
    }
    render() {
        const { image, name, price, id } = this.props;
        const { count } = this.state;
        return (
            <div className={style.container}>
                <img src={image} alt="card"></img>
                <h3>
                    <Link to={`/products/${id}`}>{name}</Link>
                </h3>
                <p>{price}{count ? `*${count}=${Number(price.split(" ")[0]) * count} $` : ""}</p>

                <div className={style.counter}>
                    <section>
                        <img src={Negative} alt="down" onClick={this.downHandler} className={this.state.count === 0 ? style.deActive : ""}></img>
                        <span>{this.state.count}</span>
                        <img src={Plus} alt="up" onClick={this.upHandler}></img>
                    </section>
                    <section>
                        <button type="submit" className={this.state.count === 0 ? style.deActive : ""}>BUY</button>
                    </section>
                </div>
            </div>
        )
    }
}

export default Card;