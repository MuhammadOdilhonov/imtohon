import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { RiInformationLine } from 'react-icons/ri'
import Cards from './Cards.json'
import CircularProgress from '@mui/material/CircularProgress';
import "./Statistika.css"
import Oylar from './Oylar.jsx'
export default function Statistika() {
    return (
        <div>
            <div className='Oy_Statistikasi'>
                <Oylar />
            </div>
            <div >
                <div>
                    <h5 style={{marginLeft:"15px"}}>Ro'yxatdan o'tanlar</h5>
                </div>
                <div className='d-flex align-items-center justify-content-evenly ' style={{ backgroundColor: "#FFFFFF", width: "75%", borderRadius: "20px", border: "1px solid black",marginLeft:"50px" }}>
                    <FiUsers style={{ color: "blue", fontSize: "35px" }} />
                    <h1 style={{ color: "blue" }}>1 712 001</h1>
                    <RiInformationLine style={{ color: "gray", fontSize: "35px" }} />
                </div>
            </div>
            <div className='row d-flex flex-wrap'>
                {
                    <div className='row my-1' >
                        {
                            Cards.map((arr, index) => {
                                return (
                                    <div key={index} className="col-4" >
                                        <div className="card my-2" style={{marginLeft:"50px"}}>
                                            <div className="col-3">
                                                <div style={{ width:"300px" , display: "flex", alignItems: "center", justifyContent: "space-between",marginTop:"15px" }}>
                                                    <h6 style={{marginLeft:"15px"}} >{arr.name}</h6>
                                                    <img style={{ width: "30px" , height:"25px" }} src={arr.img} alt="" />
                                                </div>
                                                <div>
                                                    <h1 style={{width:"150px" , marginLeft:"80px"  , textAlign:"center" ,marginTop:"15px"}}>{arr.count}</h1>
                                                </div>
                                                <div>
                                                    <div className='d-flex'><img style={{width:"25px" , height:"25px" , marginLeft:"25px"}} src={arr.img2} alt={arr.name} /> <b className={arr.rang}>{arr.Foyzlar}</b></div>
                                                    <a style={{position:"absolute" ,left:"250px" , top:"110px"}} href="https://soliq.uz/">Batafsil</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}
