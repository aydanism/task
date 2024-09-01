import React from 'react'
import "./Footer.css"
const Footer = () => {
  const buttons = [
    {
      _id: "1",
      name: "РЕЦЕПТЫ",

    }, {
      _id: "2",
      name: "АВТОРЫ",

    }, {
      _id: "3",
      name: "РЕДАКЦИЯ",

    }, {
      _id: "4",
      name: "ИДЕИ",

    }, {
      _id: "5",
      name: "БАЗА",

    },
    {
      _id: "6",
      name: "РЕКЛАМА",
    }
    ,
    {
      _id: "7",
      name: "ЖУРНАЛ",

    }, {
      _id: "8",
      name: "FAQ",

    },
    {
      _id: "9",
      name: "ПОЛИТИКА КОН.",
    }
    , {
      _id: "10",
      name: "РАССЫЛКА",

    },
    {
      _id: "11",
      name: "СООБЩИТЕ ОБ ОШИБКЕ.",
    }
  ];
  return (
    
      <div className='footer'>
        <div className='footer-block'>
          {buttons.map((button, id) => (
          <p>{button.name} </p>
        ))}
        </div>
      </div>
    
  )
}

export default Footer
