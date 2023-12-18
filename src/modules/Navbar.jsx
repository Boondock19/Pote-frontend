
import { SmallNavbar } from '../components/navbar/SmallNavbar.component'
import { LargeNavbar } from '../components/navbar/LargeNavbar.component'

export const Navbar = () => {
  return (
    <>
        <div className='hidden lg:block'>
            <LargeNavbar/>
        </div>
        
        <div className="lg:hidden">
            <SmallNavbar  />
        </div>

        {/* <div>
           <SideNavbar/>
        </div> */}
        
    </>
  )
}
