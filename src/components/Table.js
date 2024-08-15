import React from "react"

function Table() {

    const style = {
        table: 'border',
        th: ' border text-center px-[20px] py-[15px]',
        td: 'border px-[20px] py-[15px]',
        editbtn: 'bg-purple-500 px-[12px] py-[6px] rounded mr-[5px]',
        deletebtn: 'bg-red-600 px-[12px] py-[6px] rounded'
    }
    return (
        <table className={style.table}>
            <thead>
                <tr className={style.tr}>
                    <th className={style.th}>Name</th>
                    <th className={style.th}>Age</th>
                    <th className={style.th}>Gender</th>
                    <th className={style.th}>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={style.td}>Name</td>
                    <td className={style.td}>Age</td>
                    <td className={style.td}>Gender</td>
                    <td className={style.td}>
                        <button className={style.editbtn}>Edit</button>
                        <button className={style.deletebtn}>delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table 