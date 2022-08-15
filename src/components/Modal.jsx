const Modal = ({isOpen, children}) => {
  return (
    <>
    {isOpen && (
      <>
      <div className="Background">
      {children}
      </div>
      </>
    )}
    </>
  )
}
export default Modal