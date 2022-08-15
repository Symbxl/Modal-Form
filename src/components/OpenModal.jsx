const OpenModal = ({closed}) => {
  return (
      <div className="Modal">
        <div className="Modal-X">
          <button onClick={closed}>x</button>
        </div>
        <div className="Modal-Content">
        <div>Top Div</div>
        <div>Bottom Div</div>
        </div>
        <div className="Modal-Buttons">
        <button onClick={closed}>close</button>
        <button onClick={closed}>continue</button>
        </div>
    </div>
  )
}
export default OpenModal