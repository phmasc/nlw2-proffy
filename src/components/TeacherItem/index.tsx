import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

interface TeacherItemProps {
    avatar: string;
    teacher: string;
    discipline: string;
    description: string;
    price: string;

}
const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="tearcher-item">
            <header>
                <img src={props.avatar} alt={props.teacher} />
                <div>
                    <strong>{props.teacher}</strong>
                    <span>{props.discipline}</span>
                </div>
            </header>

            <p>{props.description}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>{props.price}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whastapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;