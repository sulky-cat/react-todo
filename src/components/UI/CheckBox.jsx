export default function CheckBox({ checked, setChecked }) {

   return (
      <label className="checkbox" >
         <input checked={checked} onChange={e => setChecked(e.target.checked)} type="checkbox" />
      </label>
   )
}