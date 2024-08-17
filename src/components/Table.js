import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context";

function Table() {
    const { state, dispatch } = useContext(UserContext);
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [editId, setEditId] = useState('');
    const [index, setIndex] = useState(0);
    const [range, setRange] = useState([]);

    useEffect(() => {
        setRange(Array.from({ length: state.length }, (_, i) => i + 1));
        localStorage.setItem('range', JSON.stringify(Array.from({ length: state.length }, (_, i) => i + 1)));
    }, [state.length]);

    useEffect(() => {
        if (state[0].length == 0) {
            console.log("empty");
            localStorage.clear()
        }
    }, [state])

    const style = {
        table: 'border',
        th: ' border text-center px-[20px] py-[15px]',
        td: 'border px-[20px] py-[15px]',
        editbtn: 'bg-purple-500 px-[12px] py-[6px] rounded mr-[5px]',
        deletebtn: 'bg-red-600 px-[12px] py-[6px] rounded',
        input: 'bg-blue-200 w-[70px] text-center outline-none',
        center: ' flex justify-center',
        pageBtn: 'bg-yellow-400 p-[3px] m-[5px] rounded'
    };

    const handleDelete = (id) => {
        dispatch({ type: 'Remove', payload: { id } });
    };

    const handleEdit = (user) => {
        setEditId(user.id);
        setName(user.name);
        setAge(user.age);
        setGender(user.gender);
        setEdit(true);
    };

    const handleSaveEdit = (id) => {
        dispatch({ type: 'EDIT', payload: { id, name, age, gender } });
        setEditId('');
        setName('');
        setAge('');
        setGender('');
        setEdit(false);
    };

    const handlePages = (i) => {
        setIndex(i);
    };

    return (
        <div>
            <table className={style.table}>
                {state.length === 0 ? (
                    <thead></thead>
                ) : (
                    <thead>
                        <tr>
                            <th className={style.th}>Name</th>
                            <th className={style.th}>Age</th>
                            <th className={style.th}>Gender</th>
                            <th className={style.th}>Action</th>
                        </tr>
                    </thead>
                )}
                {state && state[index] && state[index].length > 0 && (
                    <tbody>
                        {state[index].map((user) => (
                            <tr key={user.id}>
                                {edit && editId === user.id ? (
                                    <>
                                        <td className={style.td}>
                                            <input
                                                className={style.input}
                                                value={name}
                                                type="text"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </td>
                                        <td className={style.td}>
                                            <input
                                                className={style.input}
                                                value={age}
                                                type="text"
                                                onChange={(e) => setAge(e.target.value)}
                                            />
                                        </td>
                                        <td className={style.td}>
                                            <input
                                                className={style.input}
                                                value={gender}
                                                type="text"
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                        </td>
                                        <td className={style.td}>
                                            <button className={style.editbtn} onClick={() => handleSaveEdit(user.id)}>Save</button>
                                            <button className={style.deletebtn} onClick={() => handleDelete(user.id)}>Delete</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className={style.td}>{user.name}</td>
                                        <td className={style.td}>{user.age}</td>
                                        <td className={style.td}>{user.gender}</td>
                                        <td className={style.td}>
                                            <button className={style.editbtn} onClick={() => handleEdit(user)}>Edit</button>
                                            <button className={style.deletebtn} onClick={() => handleDelete(user.id)}>Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            <div className={style.center}>
                {range.length > 1 && range.map((s, i) => (
                    <div key={i} >
                        <button className={style.pageBtn} onClick={() => handlePages(i)}>{s}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Table;
