import React from 'react';


export default function About() {
  const abt={
    float: "right",
    marginTop: "70px",
    marginleft: "75px",
    width : "75%",
  }
  return (
    <>
    <div style={abt}>
      <h1 style={{color:"green" }}>About us </h1>
          <p style={{fontSize:'20px' }}>
        The Oregon Zoo Foundation, the zoo's philanthropic partner, 
        plays an integral role in supporting the zoo's animal welfare, 
        conservation and education programs. Since its inception in 1997, the foundation,
         a nonprofit, has rasied more than $84 million for the zoo's top priorities.
          </p>
      
        <h3 style={{color:"green" }}>Our Mission</h3>
        <p style={{fontSize:'20px' }}>saving species worldwide by uniting our expertise in animal care and 
        conservation science with our dedication to inspiring passion for nature.
        </p>
        
        <h3 style={{color:"green" }}>Our Values</h3>
        <ul>
        <li style={{fontSize:'25px', color:"green" }}>Collaborate</li>
        <p style={{fontSize:'20px' }}>We nurture alliances with diverse teams, peers, partners, and communities to expand and deepen our impact.</p>
        <li style={{fontSize:'25px', color:"green" }}>Innovate</li>
        <p style={{fontSize:'20px' }}>Together we pioneer new ideas and approaches to ensure the long-term health and survival of wildlife.</p>
        <li style={{fontSize:'25px', color:"green" }}>Inspire</li>
        <p style={{fontSize:'20px' }}>We share our passion for nature to increase understanding, empathy, advocacy, and action for wildlife.</p>
        <li style={{fontSize:'25px', color:"green" }}>Thrive</li>
        <p style={{fontSize:'20px' }}>When we collaborate, innovate, and inspire. We help people and wildlife thrive together for a healthy planet.</p>
        </ul>
        </div>
      </>
  )
}
