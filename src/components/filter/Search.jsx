import Input from "../UI/Input";
import searchIcon from '../../../public/svg/search.svg'

export default function Search({ setSearchNote }) {

   return (
      <div className="search">
         <Input
            placeholder='Search note...'
            onChange={e => setSearchNote(e.target.value)}
         />
         <button type="button" className="search__btn">
            <img src={searchIcon} alt="search button" />
         </button>
      </div>
   )
}