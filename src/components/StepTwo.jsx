const StepTwo = ({pageTwo, onChange, formData, nextPageTwo, backPageTwo}) => {
  return (
    <>
    {pageTwo && (
      <>
      <input type="email" placeholder="email" name="email" value={formData.email} onChange={onChange} />
      <input type="userName" placeholder="user name" name="userName" value={formData.userName} onChange={onChange} />
      <input type="password" placeholder="password" name="password" value={formData.password} onChange={onChange} />
        <button onClick={backPageTwo}>back</button>
        <button onClick={nextPageTwo}>next</button> 
      </>
    )}
      
    </>
  )
}
export default StepTwo