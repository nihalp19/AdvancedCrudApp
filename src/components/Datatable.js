import React, { useContext, useState } from "react"
import Table from "./Table"
import { UserContext } from "../context"

function Datatable() {

    const { state, dispatch } = useContext(UserContext)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const handleClick = () => {
        dispatch({ type: 'ADD', payload: { name, age, gender } })
        setName('')
        setAge('')
        setGender('')
    }


    const style = {
        container: 'w-full h-screen bg-blue-200 flex flex-col align-center',
        inputWrapper: 'w-full text-center',
        input: 'mx-[10px] pl-[5px] mt-[10px] h-[35px]',
        addBtn: 'bg-red-500 px-[15px] py-[6px] text-white rounded mt-[16px]',
        btnContainer: 'text-center',
        searchInput: 'text-center mt-[16px] mb-[32px]',
        table: 'w-full flex justify-center'
    }

    return (
        <div className={style.container}>
            <div className={style.inputWrapper}>
                <input className={style.input} type="text" value={name} placeholder="Enter Your Name..." onChange={(e) => setName(e.target.value)} />
                <input className={style.input} type="text" value={age} placeholder="Enter Your Age..." onChange={(e) => setAge(e.target.value)} />
                <input className={style.input} type="text" value={gender} placeholder="Enter Your Gender..." onChange={(e) => setGender(e.target.value)} />
            </div>
            <div className={style.btnContainer}>
                <button className={style.addBtn} onClick={handleClick}>ADD</button>
            </div>
            <div className={style.searchInput}>
                <input className={style.input} type="text" placeholder="Search ......" />
            </div>
            <div className={style.table}>
                <Table />
            </div>
        </div>
    )
}

export default Datatable