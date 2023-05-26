
import React from 'react'
import '../assets/Landing.css'
import image from '../assets/img/students.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PublicIcon from '@mui/icons-material/Public';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
//https://assets3.lottiefiles.com/packages/lf20_j2rjqphu.json


const card_data=[
  {
    img:"https://www.shbm-um6p.ma/hs-fs/hubfs/Pictures/Auditorium/UM6P_Campus_Ben-Guerir_Auditorium_03.jpg?width=5616&height=3744&name=UM6P_Campus_Ben-Guerir_Auditorium_03.jpg",
    desc :"18 well-equipped lecture halls with a capacity of +300 students"
  },
  {
    img:"https://www.um6p.ma/sites/default/files/_DPH3266AK-web.jpg",
    desc :"School coaching sessions to help our students discover and develop their potential"
  },
  {
    img:"https://www.mapbusiness.ma/wp-content/uploads/2019/03/Ecole1337.jpg",
    desc :"More than 20 technical workshops for all sectors"
  }
]

const carouseel=[
  "https://cdn2.hubspot.net/hubfs/6994178/Pictures/Outdoor%20Architecture/UM6P_Campus_Ben-Guerir_Outdoor_Architecture_18.jpg",
  "https://assets.letemps.ch/sites/default/files/styles/longread_header_desktop/public/2020-09/2017_04_03_benguerir_791_3.jpg?h=4a7d1ed4&itok=AJjKl77o",
  "https://um6p.ma/sites/default/files/2021-08/explorer.jpg"
]
const Landing = () => {
  return (
    <div className="container">
      <div className="container-home">
      <div className="left-container">
        <div className="title">
        Welcome to <br /> New <span>School</span>
        <br /> <div className="desc">
        To adopt advance and learn
        </div>
        </div>
      </div>
      <div className="right-container">
      <Player
        autoplay
        speed={3}
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_j2rjqphu.json"
        style={{ height: '600px', width: '600px' }}
>
</Player>
      </div>
      </div>
      <div className="container-slick">

        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    {carouseel.map((item)=>{
      return (
        <div class="carousel-item active" data-bs-interval="10000">
        <img src={item} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <div className="paragraphe">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      )
    })}
  </div>
  <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button  class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div className="container-card" id='About'>
        {card_data.map((card)=>{
          return(
            <Card className="card" sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="auto"
                image={card.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          )
        })}
      </div>
      <div className="container-three">
        <div className="left">
          <SchoolIcon className="iconn"style={{fontSize:80}}/>
          <p>+600 laureates for each year </p>
        </div>
        <div className="mid">
          <WorkspacePremiumIcon className="iconn"style={{fontSize:80}}/>
          <p>Accredited and recognized by the state </p>
        </div>
        <div className="right">
          <PublicIcon className="iconn"style={{fontSize:80}}/>
          <p>International Openness</p>
        </div>
      </div>
    </div>
    
  )
}

export default Landing