import Navbar from "./navbar"
import PrimarySearchAppBar from "./navCob"

const Layout = ({ children }) => {
    return (
        <div className="content">
            {/* <PrimarySearchAppBar /> */}
            <Navbar />
            { children }
        </div>
    )
}

export default Layout;