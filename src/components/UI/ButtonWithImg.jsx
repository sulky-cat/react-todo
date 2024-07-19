

export default function ButtonWithImg({ src, alt, ...props }) {
   return (
      <button {...props}>
         {props.children
            ? props.children
            : <img src={src} alt={alt} />
         }
      </button>
   )
}