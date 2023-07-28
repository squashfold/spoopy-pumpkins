import React from 'react';
import styles from '../styles/Modal.module.css';
import type { FoodItem } from '../interfaces/foodItem';

type ModalProps = {
    isCorrect: boolean;
    result: string[];
    items: FoodItem[];
};

const Modal: React.FC<ModalProps> = ({ isCorrect, result, items }) => {
    const [food1, food2] = items;
    let lowerCo2Food, higherCo2Food;
    if (food1.value < food2.value) {
        lowerCo2Food = food1;
        higherCo2Food = food2;
    } else {
        lowerCo2Food = food2;
        higherCo2Food = food1;
    }
    const co2Ratio = (food1.value / food2.value).toFixed(1);

    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <h4>{isCorrect ? 'Correct!' : 'Incorrect!'}</h4>
                {isCorrect
                    ? `${lowerCo2Food.name} results in ${co2Ratio} times less CO2 per kilo than ${higherCo2Food.name}.`
                    : `${higherCo2Food.name} results in ${co2Ratio} times more CO2 per kilo than ${lowerCo2Food.name}.`}
            </div>
        </div>
    );
};

export default Modal;
