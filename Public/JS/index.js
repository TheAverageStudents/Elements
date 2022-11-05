import React from "react";
import {createRoot} from "react-dom/client"
import Navbar from "./Navbar";
import Content from "./Content";
import { OutOfTickets } from "./Tickets";

const app = createRoot(document.getElementById("root"))

var r = createRoot(document.getElementById("tickets"))
function purchaseTicket () {
    r.render(<OutOfTickets />)
    document.getElementById("tickets").scrollIntoView()
}

window.addEventListener("DOMContentLoaded", ()=>
    app.render(
        <div>
            <Navbar purchaseTickets={purchaseTicket} />
            <Content purchaseTickets={purchaseTicket}/>
        </div>
    )
)