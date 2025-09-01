'use client'
interface IError{
    error: Error;
    reset:()=> void;
}

const Error = ({error, reset}:IError) => {
    console.log("error", error)
  return (
    <div>
      <h2>sth went wrong</h2>
      <p>error:{error.message}</p>
      <button onClick={()=>reset()} className="bg-yellow-500 text-blue-700 cursor-pointer"> reset</button>
    </div>
  )
}

export default Error
