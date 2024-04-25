import Left from '../../assets/Arrow2.png'
import Right from '../../assets/Arrow.png'
import More from '../../assets/svg.svg'

interface IButtonPag{
  isDisabled?: boolean,
  clickFuncPagin?: () => void,
  page?: number | any,
  anyPage?: number | string,
}

function Pagination({clickFuncPagin, isDisabled, page, anyPage}:IButtonPag) {
  return ( 
    <>
    <div className="pagination-cont">
      <div className="left-button">
        <button className='buttonPag'
        onClick={clickFuncPagin}
        disabled={isDisabled}>
          <img src={Left} alt='icon'></img>
          Prev  
        </button>
      </div>
      <div className="pag-numbers">
        <button className='page'>1</button>
        <button className='page'>2</button>
        <button className='page'>3</button>
        <div className='dots'>
        <img src={More}></img>
        </div>
        <button className='any-pages'>6</button>
      </div>
      <div className="right-button">
      <button className='buttonPag'
        onClick={clickFuncPagin}>Next
          <img src={Right} alt='icon'></img>
          </button>
      </div>
    </div>
    </>
  );
}

export default Pagination;