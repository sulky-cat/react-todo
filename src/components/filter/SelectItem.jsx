

export default function SelectItem({ setFilter, value, children }) {
   return (
      <div
         onClick={() => setFilter(value)}
         className="select__item"
      >
         {children}
      </div>
   )
}