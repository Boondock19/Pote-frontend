
import PropTypes from 'prop-types'; // ES6

/**
 * Se pasan las props para el manejo del dropdown
 * @param {} handleDropdown 
 * @returns 
 */



export const SideNavbar = (props) => {
  return (
    <div className="flex bg-neutral-500 w-1/3 h-screen">
        <div className="flex flex-col justify-around w-2/3">
            <div className="flex  hover:bg-white ">
                <span className="text-white p-6  hover:text-black text-3xl w-full">Home</span>
            </div>
            <div className="">
                <span className="text-white">Reportes</span>
            </div>
            <div className="">
                <span className="text-white">Tickets</span>
            </div>
            <div className="">
                <span className="text-white">Home</span>
            </div>
            <div className="flex  hover:bg-white ">
                <span className="text-white p-6  hover:text-black text-3xl w-full" onClick={props.handleDropdown}>Cerrar</span>
            </div>
        </div>
    </div>
  )
}

SideNavbar.propTypes = {
    handleDropdown: PropTypes.func.isRequired
}