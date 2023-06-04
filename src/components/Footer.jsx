import Logo from "../assets/logo.svg"
import Facebook from "../assets/facebook.svg"
import Twiter from "../assets/twitter.svg"
import Instagram from "../assets/instagram.svg"
    
const Footer = () => {
  return (
    <div className="bg-primary-300">
        <div className='w-5/6 mx-auto py-20 text-white'>
                <div className='flex md:flex-row flex-col items-center justify-between'>
                    <div className='flex flex-col items-start gap-10 basis-1/3'>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={Logo} alt="logo" />
                            <h1 className='text-lg text-white font-bold'>Gallery View</h1>
                        </div>
                        <p>Top 3 in the World</p>
                        <div className="flex gap-2">
                            <img src={Facebook} alt="facebook" />
                            <img src={Instagram} alt="instagram" />
                            <img src={Twiter} alt="twitter" />
                        </div>
                    </div>
                    <div className="flex items-start justify-between md:gap-0 gap-4 md:mt-0 mt-8 basis-2/3">
                        <div className="flex flex-col gap-6">
                            <h1 className="font-semibold text-white">Nature</h1>
                            <p className="text-sm">Ocean</p>
                            <p className="text-sm">Mountain</p>
                            <p className="text-sm">Beach</p>
                            <p className="text-sm">Waterfall</p>
                            <p className="text-sm">More..</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h1 className="font-semibold text-white">Animal</h1>
                            <p className="text-sm">Cat</p>
                            <p className="text-sm">Dog</p>
                            <p className="text-sm">Rabbit</p>
                            <p className="text-sm">Fish</p>
                            <p className="text-sm">More..</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h1 className="font-semibold text-white">People</h1>
                            <p className="text-sm">Lover</p>
                            <p className="text-sm">Family</p>
                            <p className="text-sm">Friends</p>
                            <p className="text-sm">More..</p>
                        </div>
                        <div className="flex flex-col  gap-6">
                            <h1 className="font-semibold text-white">Galaxy</h1>
                            <p className="text-sm">Planets</p>
                            <p className="text-sm">More..</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Footer