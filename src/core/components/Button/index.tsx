import React from 'react';
import './styles.scss';

type Props = {
    text: string;
    handleOnClick?: () => void; 
}

const Button = ({text, handleOnClick}: Props) => (
    <button className="button" onClick={handleOnClick ? () => handleOnClick() : () => {}}>{text}</button>
)

export default Button;