import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="tearcher-item">
            <header>
                <img src="https://instagram.fcgh39-1.fna.fbcdn.net/v/t51.2885-19/s320x320/47314542_1023701584485551_5707381975782785024_n.jpg?_nc_ht=instagram.fcgh39-1.fna.fbcdn.net&_nc_ohc=BRc_MJ0Ye7oAX-8U1Nw&oh=a37b083b6e2167b0f773e8333db39a71&oe=5F533221" alt="Phelipe Mascarenhas" />
                <div>
                    <strong>Phelipe Mascarenhas</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                blablabla
                            <br /> <br />
                            blablabla
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 200,00</strong>
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