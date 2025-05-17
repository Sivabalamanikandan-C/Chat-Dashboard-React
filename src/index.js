import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

import imgone from "./assets/images/imgone.png";
import imgtwo from "./assets/images/imgtwo.png";
import imgthree from "./assets/images/imgthree.png";
import imgfour from "./assets/images/imgfour.png";
import imgfive from "./assets/images/imgfive.png";
import imgsix from "./assets/images/imgsix.png";

import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const root = ReactDOM.createRoot(document.getElementById('root'));
const msg = [
  {
    imag: imgone,
    name: 'Jessica Koel',
    message: 'Hey, Joel, I here to help you out please ...',
    time: '11:26'
  },
  {
    imag: imgtwo,
    name: 'Komeial Bolger',
    message: 'I will send you all documents as soon a...',
    time: '12:26'
  },
  {
    imag: imgthree,
    name: 'Tamaara Suiale',
    message: 'Are you going to business trip next week',
    time: '8:26'
  },
  {
    imag: imgfour,
    name: 'Sam Nielson',
    message: 'I suggest to start new business soon',
    time: '7:16'
  },
  {
    imag: imgfive,
    name: 'Caroline Nexon',
    message: 'We need to start new reseatch center.',
    time: '9:26'
  },
  {
    imag: imgsix,
    name: 'Patrick Koeler',
    message: 'May be yes',
    time: '3:26'
  }
];

function Card({ message }) {
  return (
    <div className="Box">
      <div className="Box-Container">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <span className="search-icon"><IoSearch /></span>
        </div>

        <div className="chat">
          {
            msg.map(function (items) {
              return (<div className="chat-conatainer">
                <div className="chat-left">
                  <img src={items.imag} alt="image" className="img" />

                  <div className="chatname">
                    <h4>{items.name}</h4>
                    <p>{items.message}</p>
                  </div>
                </div>

                <div className="chat-right">
                  <p className="time">{items.time}</p>
                  <p className="star"><FaStar /></p>
                </div>
              </div>);
            })
          }
        </div>
      </div>
    </div>
  );
}

root.render(
  <Card message={msg}></Card>
);