import React from 'react'
import Calendar from "../../assets/images/herosection/calendar.svg"
import "./reserve.scss"

const Reserve = () => {
  return (
    <button type="button" className="button">
        <img src={Calendar} alt="" />
        <p>Reserve Your Spot & Start Converting More Users</p>
    </button>
  )
}

export default Reserve