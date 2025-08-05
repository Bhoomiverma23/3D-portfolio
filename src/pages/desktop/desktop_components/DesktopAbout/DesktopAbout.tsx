import "./DesktopAbout.css";
import gsap from "gsap";
import { useEffect } from "react";
import useIframeStore from "../../../../stores/iframeStore";

const DesktopAbout = () => {
    //** Logic */
    const { showAbout, showExitAnimation, updateShowAnimation } =
        useIframeStore();

    //** Style */
    useEffect(() => {
        if (showAbout) {
            gsap.to(".desktop_about_section", {
                duration: 2,
                opacity: 1,
                // filter: "blur(0px)",
            });
            gsap.to(".desktop_about_section", {
                duration: 1,
                filter: "blur(0px)",
            });
        }
    }, [showAbout]);

    useEffect(() => {
        if (showExitAnimation) {
            gsap.to(".desktop_about_section", { duration: 1, opacity: 0 });
            updateShowAnimation("Enter");
        }
    }, [showExitAnimation, updateShowAnimation]);

    return (
        <>
            {showAbout && (
                <section className="desktop_about_section">
                    <h2 className="desktop_about_section-title">ABOUT ME</h2>
                    {/* <p className="desktop_about_section-text">
                    Allow me to introduce myself first.
                </p> */}
                    <p className="desktop_about_section-text">
                        I’m Bhoomi Verma, a passionate and driven second-year B.Tech student at Indira Gandhi Delhi Technical University for Women (IGDTUW). I strongly believe that technology is not just a tool—it’s a means to create meaningful, human-centered solutions that improve lives. My academic and project journey reflects a deep commitment to innovation, social responsibility, and continuous learning.
                    </p>

                    <img
                        className="desktop_about-text-icon"
                        src="/icons/smart_toy_E38A84_wght200_48.png"
                        alt=""
                    />
                    <p className="desktop_about_section-text">
                        Over the past year, I’ve been actively involved in solving real-world problems through impactful projects. I’ve designed digital solutions focused on women’s safety, developed AI-powered healthcare applications such as maternal health monitoring (Clinix-AI), and contributed to green energy and sustainability initiatives like Harithpath, which was recognized at JIIT’s ideathon. I’ve also led and participated in multiple national-level hackathons and UI/UX competitions, including IIIT Delhi’s E-Summit and IIT Delhi’s Rendezvous, where I collaborated with cross-functional teams under pressure to deliver user-centric and innovative solutions.
                    </p>
                    <img
                        className="desktop_about-text-icon"
                        src="/icons/handshake_E38A84_wght200_48.png"
                        alt=""
                    />
                    <p className="desktop_about_section-text">
                        Beyond academics, I’m deeply involved in organizing community efforts—from coding contests and tech cohorts like SpringCode to environmental clean-up drives near the Yamuna River. These experiences have strengthened my skills in leadership, design thinking, and public speaking, while nurturing a strong sense of purpose and empathy.
                    </p>
                </section>
            )}
        </>
    );
};

export default DesktopAbout;
