import Loader from "react-loader-spinner";


const MyLoader = () => {
    return(
        <Loader type="ThreeDots" color="#00BFFF" height={250} width={250} style={{position: "absolute", top: "40%", left: "45%"}}/>
    )
}

export default MyLoader;