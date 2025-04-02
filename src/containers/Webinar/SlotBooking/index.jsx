

import "./slotbooking.scss";
import Reserve from '../../../components/Reserve';
const SlotBooking= () => {
  return (
    <section className="container slotbooking">
        <div className="booking">
           <Reserve/>
           <p id="p1">Can&apos;t attend? Register to get the recording. Let&apos;s improve your apps and websites for users!</p>
        </div>
    </section>
  )
}

export default SlotBooking;