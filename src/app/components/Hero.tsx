import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaPinterest, 
  FaTiktok 
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center py-20"
    >
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full border-4 border-teal-400 overflow-hidden shadow-lg mb-6">
        <img
          src="/images/pro.jpg"
          alt="Ayomide Kofoworola"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Title */}
      <h1 className="text-3xl font-bold text-white">Ayomide Kofoworola</h1>
      <p className="text-teal-400 mt-2">Full Stack Web Developer</p>

      {/* Social Icons */}
      <div className="flex space-x-6 mt-6 text-gray-400">
        <a href="https://github.com/heisyomide" className="hover:text-teal-400 transition">
          <FaGithub size={22} />
        </a>
        <a href="#" className="hover:text-teal-400 transition">
          <FaLinkedin size={22} />
        </a>
        <a href="https://x.com/he_is_yo?s=21" className="hover:text-teal-400 transition">
          <FaTwitter size={22} />
        </a>
        <a href="https://www.facebook.com/share/1GnCQxft29/?mibextid=wwXIfr" className="hover:text-teal-400 transition">
          <FaFacebook size={22} />
        </a>
        <a href="https://www.instagram.com/heis_yo?igsh=MWI4cXJ5Zmw0NHcxOQ%3D%3D&utm_source=qr" className="hover:text-teal-400 transition">
          <FaInstagram size={22} />
        </a>
        <a href="https://pin.it/svBTEcxxp" className="hover:text-teal-400 transition">
          <FaPinterest size={22} />
        </a>
        <a href="https://www.tiktok.com/@_yomide_01?_r=1&_d=ehm785id4ja75a&sec_uid=MS4wLjABAAAA6sdiwkrBtoTIoFNpooUmuEeOVaP32AXeYGapzuAE-iVeAeUlARBQNkXtXOHqJJrU&share_author_id=7021419986040210438&sharer_language=en&source=h5_m&u_code=dl93mca8i05hca&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAA6sdiwkrBtoTIoFNpooUmuEeOVaP32AXeYGapzuAE-iVeAeUlARBQNkXtXOHqJJrU&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7021419986040210438&share_link_id=477F7D64-D558-44DE-AE0D-9A530519F86A&share_app_id=1233" className="hover:text-teal-400 transition">
          <FaTiktok size={22} />
        </a>
      </div>
    </section>
  );
};
export default Hero;