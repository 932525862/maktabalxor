
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa"


export const FixedSocial = () => {
  return (
    <div className="fixed z-[9999] right-0 bottom-52 bg-green-600 rounded-[5px]">
        <ul className="flex flex-col text-[20px]">
          <li className="p-2 hover:bg-green-800 rounded-t-[5px]"><a href="#"><FaFacebookF /></a></li>
          <li className="p-2 hover:bg-green-800"><a href="https://t.me/alxorazmiyntm"><FaTelegramPlane /></a></li>
          <li className="p-2 hover:bg-green-800"><a href="https://www.instagram.com/alxorazmiy_ntm/profilecard/?igsh=cWQxYngxYjFlaTV5"><FaInstagram /></a></li>
          <li className="p-2 hover:bg-green-800 rounded-b-[5px]"><a href="https://www.youtube.com/@AL_XORAZMIY_MAKTABI"><FaYoutube /></a></li>
        </ul>
    </div>
  )
}