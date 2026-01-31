const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Terms & Condition</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className=" pt-20 flex gap-3 ">
            <a href="https://www.github.com/diotoara" target="_blank" className="social-icon">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a>
            <a  href="https://www.linkedin.com/in/aryan-jha-530719325/" target="_blank" className="social-icon">
                <img src="/assets/icons8-linkedin.svg" alt="linkedin" className="w-3/4 h-3/4" />
            </a>
            <a href="https://www.instagram.com/diotoara" target="_blank" className="social-icon">
                <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </a>
        </div>

        <p className="text-white-500">© 2025 Aryan Jha. All Rights Reserved</p>
    </section>
  )
}

export default Footer