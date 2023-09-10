
import HomePageCard from './HomePageCard';
import '../component/HomePageCard'
import '../CSS/projects.css'
import { Link } from 'react-router-dom';



const cardData = [
    {
      title: "Construction of Air Traffic Control Tower (ATCT) UD 2.4) (2023 -2024)",
      content:`Subcontract for The Morganti Group, Inc. for the following services: 
      ▪ Supply and install new Airfield ground lighting control and monitoring system (ALCMS)at New Air Traffic Control Tower ▪ Supply and install new fibre Optic Network to serve ALCMS 
      ▪ Supply and install new Fiber optic Network to serve RADARAPPROACH CONTROL DATA connection from ExstingATCT to New ATCT
        -Customer: The Morganti Group, Inc . `,
    
    
    
    },
    {
      title: " Upgrade Airfield Ground Lighting control and monitoring system at King Faisal Airbase – AlJafer – Jordan",
      
      content: `Project description: upgrade exsting ALCMS at King Faisal Airbase
      includes:
      ▪ Supply and install new Airfield ground lighting control and
      monitoring system (ALCMS) ATCT workstation
      ▪ Supply and install new Airfield ground lighting control and
      monitoring system (ALCMS) maintenance workstation
      ▪ Supply and install new Airfield ground lighting control and
      monitoring system (ALCMS) Communication Networks 
      
      
      
      -Customer: Royal Jordanian Airforce `,
    },
    {
      title:"King Hussein International Airport West Taxiway Project (2020)",
      content:`Subcontract for Associated Engineering
      Consultants (AEC) for the following services:
      ▪ Design and set of project documents for Airfield ground
      lighting System of the new West Parallel Taxiway,
      ▪ Design and set of project documents for Airside Guidance
      Signs
      ▪ Design and set of project documents for 3.3KV Electrical
      network serving Navigational Aids Systems,
      ▪ Design and set of project documents
      ▪ Design and set of project documents for Airfield ground
      lighting control and monitoring system
      - Customer: AEC – to Aqaba Development Company. `
  
  
    },{
  title:" Royal Jordanian Airforce Airfield Ground Lighting Systems upgrade at King Hussein Airbase Collage (KHAC) , (2020- 2022)",
  content:`Subcontract for Hiba Engineering Establishment
  for the following services:
  ▪ Airfield ground lighting systems Design, Survey, Study, for
  the complete AGL Systems and Substation Equipment’s,
  ▪ Airfield ground lighting system supervision,
  ▪ Airfield ground lighting system installation, Testing and
  commission’s
  
  
  - Customer: Hiba Engineering Establishment – United Stat Airforce
  Life Cycle Management Center (USALCMC)`
    },{
      title:"UD 2.4 Package 2 Jordan Project, Muaffaq Salti Airbase ,AzraqJordan ( 2020-2023)    ",
      content:`Subcontract for American International
      Contractor Inc. (AICI) for:
      ▪ Airfield ground lighting installation and repair, Taxiway and
      Apron perimeter light include testing and commissioning,
      ▪ AGL Substation equipment modification (Electrical)
      ▪ Airfield ground lighting control and monitoring system
      modification and Fiber Optic network construction

      - Customer: American International Contractor.Inc. `
    },{
      title:"Runway 31/13 repair at Muaffaq Salti Airbase, Azraq-Jordan (2017-2020)",
      content:`Subcontract for American International
      Contractor Inc. (AICI) for:
      ▪ Airfield ground lighting installation and repair, include testing
      and commissioning,
      ▪ AGL Substation rehabilitation (Electrical, Mechanical and
      Civil)
      ▪ Aircraft Arresting system (BAK 12) vaults Electrical and
      mechanical infrastructure Supply and installation
      - Customer: American International Contractor. Inc.`
    },{
      title:"Helipad Lighting System, -Aqaba – Jordan (2020)",
      content:`Subcontractor for Abu Shreikh Contracting
      Company, for the supply and installation of Airfield ground lighting
      system for Two Helipad at south beach – Aqaba,
      - Customer: Abu Shreikh contracting company / General Intelligence
      Directorate (Jordan)`
      
    },{
      title:"Queen Alia Inter. Airport ,North Runway Rehabilitation Project ,(2016-  2017)",
      content:`Subcontractor for Butec & Al-Tarawneh JV for
      Airfield ground lighting and Related Civil Work installation, Testing
      & commissioning
      - Customer: Butec and Altarawneh contracting company JV`
    },{
      title:"Sahal Nsab Runway Air Strip(2017)",
      content:` Subcontractor for HIBA engineering Establishment for Design,
      Supply and installation of Solar Airfield ground lighting Systems
      - Customer: HIBA Engineering Establishment `
    },{
      title:"Queen Alia Inter. Airport, North Runway Rehabilitation Project, (2017)",
      content:`Project description: Subcontractor for Butec & Al-Tarawneh JV for
      installation 3.3 KV MV Substation and MV Ring Network installation,
      Testing and commissioning
      - Customer: Butec JV AlTarawneh
      `
    },{
      title:"Cairo International Airport, North Runway Project & Related Taxiways(2015-2016)",
      content:` Project description: Supervision of Airfield ground lighting
      Equipment installation with TKH, Hella Induperm airfield ground
      lighting suppliers
      - Customer: TKH Group, Airfield lighting supplier & ORASCOM
      `
    },{
      title:" Land scape lighting project for the main entrance at QAIA (2014)",
      content:`Project description: Supply and install LED lighting fixture and
      power network for land scape lighting at the main entrance 2 KM
      length, of Queen Alia Inter. Airport
      - Customer: Airport International Group`
    }
    // Add more card objects as needed
  ];

  const projects= () => {
    return(

        <div>
<div className="strategy-item">
          <h3>our projects</h3>
          <p>allow us to present a selection of our professional endeavors, showcasing the breadth and depth of our projects portfolio:</p>
        </div>


        <div className="home-page">
      {cardData.map((card, index) => (
        <HomePageCard key={index} title={card.title} content={card.content} />
      ))}
    </div>
    <div className="strategy-button">
          
          <p>you can checkout our work images from here </p>
        </div>
        <div className="button-container">
        <Link to="/gallery">
          <button className="button-projects">View Image Gallery</button>
        </Link>
      </div>

        </div>

    )}

export default projects;