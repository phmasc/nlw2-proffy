import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="weekday">Dia da Semana</label>
                        <input type="text" id="weekday" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    avatar="https://instagram.fcgh39-1.fna.fbcdn.net/v/t51.2885-19/s320x320/47314542_1023701584485551_5707381975782785024_n.jpg?_nc_ht=instagram.fcgh39-1.fna.fbcdn.net&_nc_ohc=BRc_MJ0Ye7oAX-8U1Nw&oh=a37b083b6e2167b0f773e8333db39a71&oe=5F533221"
                    teacher="Phelipe Mascarenhas"
                    discipline="Quimica"
                    description="blablabla"
                    price="200.00"
                />
                <TeacherItem
                    avatar="https://instagram.fcgh39-1.fna.fbcdn.net/v/t51.2885-19/s320x320/47314542_1023701584485551_5707381975782785024_n.jpg?_nc_ht=instagram.fcgh39-1.fna.fbcdn.net&_nc_ohc=BRc_MJ0Ye7oAX-8U1Nw&oh=a37b083b6e2167b0f773e8333db39a71&oe=5F533221"
                    teacher="Phelipe Mascarenhafdfss"
                    discipline="Quim31312ica"
                    description="blaweqweblabla"
                    price="200232.00"
                />
                <TeacherItem
                    avatar="https://instagram.fcgh39-1.fna.fbcdn.net/v/t51.2885-19/s320x320/47314542_1023701584485551_5707381975782785024_n.jpg?_nc_ht=instagram.fcgh39-1.fna.fbcdn.net&_nc_ohc=BRc_MJ0Ye7oAX-8U1Nw&oh=a37b083b6e2167b0f773e8333db39a71&oe=5F533221"
                    teacher="Phelipe Mascfsdfsdarenhas"
                    discipline="Quimifsdfca"
                    description="blafsdfsdfsblabla"
                    price="323200.00"
                />
                <TeacherItem
                    avatar="https://instagram.fcgh39-1.fna.fbcdn.net/v/t51.2885-19/s320x320/47314542_1023701584485551_5707381975782785024_n.jpg?_nc_ht=instagram.fcgh39-1.fna.fbcdn.net&_nc_ohc=BRc_MJ0Ye7oAX-8U1Nw&oh=a37b083b6e2167b0f773e8333db39a71&oe=5F533221"
                    teacher="Phelipe Masffsdfscarenhas"
                    discipline="Quim312312ica"
                    description="blfsfsdablabla"
                    price="20320.00"
                />
            </main>

        </div>
    )
}

export default TeacherList;