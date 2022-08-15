const StepOne = ({pageOne, onChange, closed, formData, nextPageOne}) => {
  return (
    <>
    {pageOne && (
      <>
        <input type="text" placeholder="first name" name="firstName" value={formData.firstName} onChange={onChange} />
        <input type="text" placeholder="last name" name="lastName" value={formData.lastName} onChange={onChange} />
        <input type="date" placeholder="" name="date" value={formData.date} onChange={onChange} />
          <button onClick={closed}>cancel</button>
          <button onClick={nextPageOne}>next</button>
      </>
    )}
    </>
  )
}
export default StepOne