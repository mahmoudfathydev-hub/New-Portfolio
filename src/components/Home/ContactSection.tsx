import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import BackgroundLightLines from "../UI/BackgroundLightLines";
const Contact = () => {
    const contactStyle = [
        {
            id: 1,
            name: "Email",
            icon: <MdEmail />,
            link: "mailto:mahmoudfathy.dev@gmail.com",
            value: "mahmoudfathy.dev@gmail.com",
        },
        {
            id: 2,
            name: "WhatsApp",
            icon: <FaWhatsapp />,
            link: "https://wa.me/201200481281",
            value: "+20 120 048 1281",
        },
        {
            id: 3,
            name: "LinkedIn",
            icon: <CiLinkedin />,
            link: "https://www.linkedin.com/in/mahmoudfathy-frontend",
            value: "mahmoudfathy-frontend",
        },
        {
            id: 4,
            name: "GitHub",
            icon: <FaGithub />,
            link: "https://github.com/mahmoudfathydev-hub",
            value: "github.com/mahmoudfathydev-hub",
        },
    ];
    return (
        <section className="relative overflow-hidden py-24 px-6 md:px-16">
            <p className="text-center text-3xl md:text-4xl font-semibold text-white mb-20">
                You Must <span className="text-[#e99b63]">Contact Me</span> Now
            </p>
            <BackgroundLightLines count={5} direction="left" rotate={0}/>
            <BackgroundLightLines count={5} direction="right" rotate={0}/>
            <div className="flex flex-col md:flex-row gap-14">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    {contactStyle.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-5 p-6
                            bg-[#111] border border-white/10
                            rounded-2xl
                            hover:border-[#e99b63] hover:bg-[#161616]
                            transition-all duration-300"
                        >
                            <div
                                className="text-2xl p-4 rounded-full
                            bg-white/5 text-[#e99b63]
                            group-hover:scale-110 transition"
                            >
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm text-white/50">
                                    {item.name}
                                </span>
                                <span className="text-white font-medium break-all">
                                    {item.value}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="w-full md:w-1/2">
                    <form
                        action="mailto:mahmoudfathy.dev@gmail.com"
                        method="POST"
                        encType="text/plain"
                        className="bg-[#111] border border-white/10
                        rounded-2xl p-8
                        flex flex-col gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-white/60">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Mahmoud Fathy"
                                className="bg-[#0b0b0b] border border-white/10
                            rounded-xl px-4 py-3 text-white
                            outline-none
                            focus:border-[#e99b63] transition"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-white/60">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="mahmoudfathy.dev@gmail.com"
                                className="bg-[#0b0b0b] border border-white/10
                            rounded-xl px-4 py-3 text-white
                            outline-none
                            focus:border-[#e99b63] transition"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm text-white/60">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                placeholder="Write your message here..."
                                className="bg-[#0b0b0b] border border-white/10
                            rounded-xl px-4 py-3 text-white
                            outline-none resize-none
                            focus:border-[#e99b63] transition"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-[#e99b63] text-black
                            font-medium py-3 rounded-xl
                            hover:bg-[#f0a874] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
