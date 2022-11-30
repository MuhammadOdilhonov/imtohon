import React from 'react'
import './NavLeft.css'
import { RiHome2Line } from 'react-icons/ri'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AiOutlineSetting} from 'react-icons/ai'
import {BsPersonCheckFill} from 'react-icons/bs'
import {TbReportSearch} from "react-icons/tb"
import {FiPhoneCall} from 'react-icons/fi'
import  {Link} from 'react-router-dom'

export default function NavLeft() {
    return (
        <div className='Nav'>
            <div className='Nav__BosiladiganJoyni__Otasi'>
                <div className='Ota'>
                    <div className='borderTop'></div>
                    <Link to='/' className='Statistika'>
                   
                        <RiHome2Line style={{marginLeft:"18px" , marginRight:"25px"}} />
                        Statistika
                   
                    </Link>
                    <div className='borderBottom'></div>
                </div>
                <div className='Ota'>
                    <div className='borderTop'></div>
                    <div >
                        <Accordion className='Statistika2' sx={{width:"210px" , backgroundColor:"blue" , boxShadow:"none" , color:"white"}}>
                            <AccordionSummary
                            style={{borderRadius:"none"}}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography > <AiOutlineSetting  style={{marginRight:"25px"}}/>  Amallar</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                   <div >
                                    <div >Push jo’natish</div>
                                    <div style={{width:"197px" , marginTop:"10px"}}></div>
                                    <Link className='Statistikaa' to='/table' >Foydalanuvchi siyosati</Link>
                                    <div style={{width:"197px" }}></div>
                                   </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                    </div>
                    <div className='borderBottom'></div>
                </div>
                <div className='Ota'>
                    <div className='borderTop'></div>
                    <div  className='Statistika'>
                        <BsPersonCheckFill  style={{marginLeft:"18px" , marginRight:"25px"}}/>
                    Ruxsatlar
                    </div>
                    <div className='borderBottom'></div>
                </div>
                <div className='Ota'>
                    <div className='borderTop'></div>
                    <div  className='Statistika'>
                        <TbReportSearch style={{marginLeft:"18px" , marginRight:"25px"}}/>
                    Hisobotlar
                    </div>
                    <div className='borderBottom'></div>
                </div>
                <div className='Ota'>
                    <div className='borderTop'></div>
                    <div  className='Statistika'>
                        <FiPhoneCall style={{marginLeft:"18px" , marginRight:"25px"}}/>
                    Call-markaz
                    </div>
                    <div className='borderBottom'></div>
                </div>
            </div>
        </div >
    )
}
