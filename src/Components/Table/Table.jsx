import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Menu from './Menu'

export default function Table() {
    const data = [
        {
            id: "1",
            name: "Olimov Asqarali",
            tel: 998977159400,
            raqam: 31511962610020,
            TeleFonMadel: "Remi 10 prime",
            color: "whire"
        },
        {
            id: "2",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 798465165,
            TeleFonMadel: "Samsung A12",
            color: "whire"
        },

        {
            id: "3",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 798465165,
            TeleFonMadel: "Samsung A12",
            color: "whire"
        },
        {
            id: "4",
            name: "Baxtiyorov Xaliljon",
            tel: 998901025896,
            raqam: 7984651655,
            TeleFonMadel: "Samsung A50",
            color: "whire"
        },
        {
            id: "5",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 798465265,
            TeleFonMadel: "Samsung A23",
            color: "whire"
        },
        {
            id: "6",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 798465165,
            TeleFonMadel: "redmi a5",
            color: "whire"
        },
        {
            id: "7",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 998465165,
            TeleFonMadel: "Samsung A1",
            color: "whire"
        },
        {
            id: "8",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 298665165,
            TeleFonMadel: "Samsung A2",
            color: "whire"
        },
        {
            id: "9",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 198465165,
            TeleFonMadel: "Samsung A3",
            color: "whire"
        },
        {
            id: "10",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 998465165,
            TeleFonMadel: "Samsung A8",
            color: "whire"
        },
        {
            id: "11",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 598865165,
            TeleFonMadel: "Samsung A10",
            color: "whire"
        },
        {
            id: "12",
            name: "Usmonov Eldor",
            tel: 998976239405,
            raqam: 878465165,
            TeleFonMadel: "Samsung A12",
            color: "whire"
        },
    ]
    const [Data1, setData1] = useState(data)
    const [Data2, setData2] = useState(data)

    let id = localStorage.getItem("id")

    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');
    const [Id, setId] = useState(null)
    const [User, setUser] = useState(null)
    const [Telefon, setTelefon] = useState(null)
    const [JShShIR, setJShShIR] = useState(null)
    const [Qurilma, setQurilma] = useState(null)
    const [None, setNone] = useState('none')
    const [Block , setBlock] = useState('blok')
    const [NomalumJisim, setNomalumJisim] = useState(null)

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
        console.log(Id, User, Telefon, JShShIR, Qurilma);

        let mass = [...Data1]

        mass.push({
            id: Id,
            name: User,
            tel: Telefon,
            raqam: JShShIR,
            TeleFonMadel: Qurilma,
            color: "white"
        })

        setData1(mass)

    };
    const handleClos = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }

    };


    console.log(id);

    function Qidiruv(params) {
        console.log(params.target.value);
        let sorchData = Data2.filter((arr, i) => {
            return arr.id.includes(params.target.value)
        })
        setData1([...sorchData])
    }
    function Ochirish(params) {
        console.log("ishladi", params);
        const a = [...Data1]
        console.log(a, "=> splicedan oldin");
        a.splice(params, 1)
        console.log(a, "splicedan keyin");
        setData1([...a])
    }
    function Blaklash(params) {
        let mass = [...Data1]
        mass[params].color = "#FFEEEE"

        setData1(mass)
    }
    function BlocdanChiqarish(params) {
        let mass = [...Data1]
        mass[params].color = "white"

        setData1(mass)
    }

    function EditFunc(params) {
        setOpen(true);
        setNone('block')
        setBlock('none')
        console.log(Data1[params].LastName);
        setId(Data1[params].id)
        setUser(Data1[params].name)
        setTelefon(Data1[params].tel)
        setJShShIR(Data1[params].raqam)
        setQurilma(Data1[params].TeleFonMadel)
        setNomalumJisim(params)
    }

    function Edit(event, reason) {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
        const malumot = [...data]
      malumot.splice(NomalumJisim , 1 ,{
         id: Id,
            name: User,
            tel: Telefon,
            raqam: JShShIR,
            TeleFonMadel: Qurilma,


      })
      setData1(malumot)
      
    }

    return (
        <div>
            <h1>ID orqali qidirish</h1>
            <div className='d-flex'><input onInput={(val) => { Qidiruv(val) }} type="text" placeholder='ID' className='form-control  input' />  <div>
                <Button onClick={handleClickOpen}>Qo'shish</Button>
                <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Qo`shish</DialogTitle>
                    <DialogContent>
                        <Box component="form" sx={{ overflowX: "auto" }}>
                            <input value={Id} onInput={(val) => { setId(val.target.value) }} className='form-control' type="text" placeholder='Id' /><br />
                            <input value={User} onInput={(val) => { setUser(val.target.value) }} className='form-control' type="text" placeholder='User' /><br />
                            <input value={Telefon} onInput={(val) => { setTelefon(val.target.value) }} className='form-control' type="text" placeholder='telefon' /><br />
                            <input value={JShShIR} onInput={(val) => { setJShShIR(val.target.value) }} className='form-control' type="text" placeholder='JShShIR' /><br />
                            <input value={Qurilma} onInput={(val) => { setQurilma(val.target.value) }} className='form-control' type="text" placeholder='Qurilma' /><br />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClos}>Cancel</Button>
                        <Button onClick={handleClose} style={{display:Block}}>Ok</Button>
                        <Button onClick={Edit} style={{ display: None }} >Edit</Button>
                    </DialogActions>
                </Dialog>
            </div></div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">user</th>
                        <th scope="col">Telefon</th>
                        <th scope="col">JShShIR</th>
                        <th scope="col">Qurilma</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody style={{ height: "200px ", overflow: "auto" }}>
                    {
                        Data1.map((arr, i) => {
                            return (

                                <tr style={{ backgroundColor: arr.color }}>
                                    <td>{arr.id}</td>
                                    <td>{arr.name}</td>
                                    <td>{arr.tel}</td>
                                    <td>{arr.raqam}</td>
                                    <td>{arr.TeleFonMadel}</td>
                                    <Menu event={{ id: i, Ochir: Ochirish, Bloclash: Blaklash, blocChiqar: BlocdanChiqarish, EditFunk: EditFunc }} />
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}








