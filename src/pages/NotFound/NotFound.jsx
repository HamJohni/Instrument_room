import React from 'react';
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const nav = useNavigate()
    return (
        <section className={'notFound'}>
            <div className="notFound__wrapper">
                <h1 className="notFound__title">К сожалению, страница не найдена</h1>
                <p className="notFound__desc">Но мы обязательно всё починим, <br/> а пока попробуйте:</p>
                <button onClick={() => nav('/')} className="notFound__btn">ВЕРНУТЬСЯ НА ГЛАВНУЮ</button>
                <span className="notFound__span">
                    <svg width="461" height="148" viewBox="0 0 461 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M144 112H127V144H98V112H2.83122e-07V96.2L91 3.99999H127V98H144V112ZM98 98V30H96L29 98H98ZM229.953 14C224.753 14 219.686 15.1333 214.753 17.4C209.82 19.5333 205.42 23 201.553 27.8C197.82 32.6 194.753 38.8 192.353 46.4C190.086 54 188.953 63.2 188.953 74C188.953 84.8 190.086 94 192.353 101.6C194.753 109.2 197.82 115.4 201.553 120.2C205.42 125 209.82 128.533 214.753 130.8C219.686 132.933 224.753 134 229.953 134C235.153 134 240.22 132.933 245.153 130.8C250.086 128.533 254.42 125 258.153 120.2C262.02 115.4 265.086 109.2 267.353 101.6C269.753 94 270.953 84.8 270.953 74C270.953 63.2 269.753 54 267.353 46.4C265.086 38.8 262.02 32.6 258.153 27.8C254.42 23 250.086 19.5333 245.153 17.4C240.22 15.1333 235.153 14 229.953 14ZM229.953 -5.72205e-06C240.486 -5.72205e-06 250.153 1.53333 258.953 4.59999C267.753 7.53333 275.353 12.0667 281.753 18.2C288.153 24.3333 293.086 32.0667 296.553 41.4C300.153 50.6 301.953 61.4667 301.953 74C301.953 86.5333 300.153 97.4667 296.553 106.8C293.086 116 288.153 123.667 281.753 129.8C275.353 135.933 267.753 140.533 258.953 143.6C250.153 146.533 240.486 148 229.953 148C219.42 148 209.753 146.533 200.953 143.6C192.153 140.533 184.553 135.933 178.153 129.8C171.753 123.667 166.753 116 163.153 106.8C159.686 97.4667 157.953 86.5333 157.953 74C157.953 61.4667 159.686 50.6 163.153 41.4C166.753 32.0667 171.753 24.3333 178.153 18.2C184.553 12.0667 192.153 7.53333 200.953 4.59999C209.753 1.53333 219.42 -5.72205e-06 229.953 -5.72205e-06ZM460.016 112H443.016V144H414.016V112H316.016V96.2L407.016 3.99999H443.016V98H460.016V112ZM414.016 98V30H412.016L345.016 98H414.016Z" fill="black"/>
</svg>
                </span>
            </div>
        </section>
    );
};

export default NotFound;