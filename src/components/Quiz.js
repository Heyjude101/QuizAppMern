import React from "react";
export default function Quiz(){


    function onNext(){
        console.log("onNext called")
        // if(trace < queue.length){
        //     /** increase the trace value by one using MoveNextAction */
        //     dispatch(MoveNextQuestion());

        //     /** insert a new result in the array.  */
        //     if(result.length <= trace){
        //         dispatch(PushAnswer(check))
        //     }
        // }
     
        // /** reset the value of the checked variable */
        // setChecked(undefined)
    }
    function onPrev(){
        console.log("onPrev called")
        // if(trace < queue.length){
        //     /** increase the trace value by one using MoveNextAction */
        //     dispatch(MoveNextQuestion());

        //     /** insert a new result in the array.  */
        //     if(result.length <= trace){
        //         dispatch(PushAnswer(check))
        //     }
        // }
     
        // /** reset the value of the checked variable */
        // setChecked(undefined)
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/* question go here */}
            <div className = 'grid'>
            <button className='btn prev' onClick ={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}