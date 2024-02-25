import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { All, sers, update, chec, cmp, imp, cng } from './App/Todo';
function View() {

    let dispatch = useDispatch()
    let data = useSelector((state) => state.todo.value);
    let [s, sets] = useState()

    const del = (id) => {
        let temp = data.filter((ele) => {
            return id != ele.id;
        })
        localStorage.setItem('data', JSON.stringify(temp));
        localStorage.setItem('temp', JSON.stringify(temp));
        dispatch(update(JSON.parse(localStorage.getItem('data'))))
    }

    const ser = () => {
        let tmp = JSON.parse(localStorage.getItem('temp'))
        var temp = tmp.filter((ele) => {
            return ele.val === s;
        })
        localStorage.setItem('data', JSON.stringify(temp));
        dispatch(sers(JSON.parse(localStorage.getItem('data'))))
    }

    const all = () => {
        dispatch(All(JSON.parse(localStorage.getItem('temp'))))
    }

    const check = (e_id) => {
        dispatch(chec(e_id))
    }

    const incom = () => {
        let tmp = JSON.parse(localStorage.getItem('temp'))
        let temp = tmp.filter((ele) => {
            return (
                ele.check === false
            )
        })
        localStorage.setItem('data', JSON.stringify(temp));
        dispatch(cmp(JSON.parse(localStorage.getItem('data'))))

    }
    const com = () => {
        let tmp = JSON.parse(localStorage.getItem('temp'))
        let temp = tmp.filter((ele) => {
            return (
                ele.check === true
            )
        })
        localStorage.setItem('data', JSON.stringify(temp));
        dispatch(imp(JSON.parse(localStorage.getItem('data'))))
    }
    const edit = (ind) => {
        let a = data[ind].val
        dispatch(cng({ a, ind }))

    }


    return (
        <>
            <input type='text' placeholder='search' onChange={(e) => sets(e.target.value)}></input>
            <input type='button' value="Search" onClick={ser}></input>
            <br></br><br></br>
            <input type='button' value="Complete" onClick={com}></input>
            <input type='button' value="Uncomplete" onClick={incom}></input>
            <input type='button' value="All" onClick={all}></input>
            <table border={1}>
                {
                    data.map((ele, ind) => {
                        return (
                            <tr key={ind}>
                                <td><input type='checkbox' onChange={(e) => { check(ele.id) }} checked={ele.check}></input></td>
                                <td><input type='text' style={{ textDecoration: ele.check === true ? 'line-through' : 'none' }} value={ele.val} readOnly></input></td>
                                <td key={ind}><input type="button" value='Delete' onClick={() => del(ele.id)}></input></td>
                                <td><input type="button" value='Edit' onClick={() => edit(ind)}></input></td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default View;
