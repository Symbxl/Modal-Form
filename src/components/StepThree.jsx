const StepThree = ({pageThree, onChange, formData, onSubmit, backPageThree}) => {
  return (
    <>
    {pageThree && (
      <>
        <input type="text" placeholder="select" name="select" value={formData.select} onChange={onChange} />
        <input type="text" placeholder="drop down" name="dropDown" value={formData.dropDown} onChange={onChange} />
        <input type="text" placeholder="file" name="file" value={formData.file} onChange={onChange} />
          <button onClick={backPageThree}>back</button>
          <button onClick={onSubmit}>submit</button>
      </>
    )}
    </>
  )
}
export default StepThree