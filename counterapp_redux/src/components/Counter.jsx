import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../redux/slices/CounterSlice";

const Counter = () => {

    // useSelector hook is used to fetch data from the slice
    const count = useSelector((state) => state.counter.value);

    // useDispatch is used to call the functions from the slice
    const dispatch = useDispatch();

    return (
        <div className="flex w-full h-screen items-center justify-center space-x-10 bg-slate-300">
            <button className="bg-red-500 p-3 border rounded-lg text-white" onClick={() => dispatch(increament())}>Increament</button>
            <br></br>
            <br></br>
            <div className="font-bold border border-solid p-2 rounded-lg px-6">{count}</div>
            <br></br>
            <br></br>
            <button className="bg-red-500 p-3 border rounded-lg text-white" onClick={() => {dispatch(decreament())}}>Decreament</button>
        </div>
    )
}

export default Counter;