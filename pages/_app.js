import "../styles/globals.css";

//internal Import
import {NavBar,Footer} from "../components/componentindex.js";

const MyApp = ({Component, pageProps}) =>(
    <div>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </div>
)

export default MyApp;