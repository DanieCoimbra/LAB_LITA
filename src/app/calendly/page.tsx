"use client";
import "./calendly.css";
import { InlineWidget } from "react-calendly";


export default function Calendly() {
  return (
    <section className="calendly">
      <div className="ccontainer">
        <div className="calendly-container">
          <InlineWidget  
          url="https://calendly.com/projetolita/reuniao" 
        />
        </div>
     </div>   
    </section>
    );
  }
  