
const Page = () => {
   let marks = 80
   
   const changemarks = () =>{
   console.log(marks)
   marks = 33
   console.log(marks)
}
   return (
    <>
    <h1 className="text-2xl  ">My total marks is 80</h1>  
    <button onClick={changemarks} className="bg-slate-700 text-white px-5 py-2">Update</button>

    </>
   )
}
export default Page