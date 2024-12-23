import Footer from "../Components/Footer/Footer"
import Ecosystem from "../Components/Ecosystem/Ecosystem"
import MainCard from "../Components/MainCard/MainCard"

function EcosystemAll() {
  return (
    <div className="bg-black">
      <MainCard />
      <Ecosystem />
      <div className="md:mt-20 mt-12">
      <Footer />
      </div>
    </div>
  )
}

export default EcosystemAll