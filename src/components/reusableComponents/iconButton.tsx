

const IconButton = ({ onClick, label }) => {
    return (
<div className="">
        <button className="w-20 h-20 rounded-full flex justify-center items-center
                    border border-blue-light " onClick={onClick}>
       {label}
        </button>
</div>
    
);
}
 
export default IconButton;