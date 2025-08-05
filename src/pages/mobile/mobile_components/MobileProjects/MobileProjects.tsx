import "./MobilleProjects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import useHoverSound from "../../../../components/Extras/SoundEffects/hoverSound";
import useClickSound from "../../../../components/Extras/SoundEffects/clickSound";

const MobileProjects = () => {
    //** Logic */
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    //** Style */
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const scrollTrigger = ScrollTrigger.create({
            trigger: ".mobile_projects-section",
            scroller: ".mobile-content-wrapper",
            start: 2350,
            // markers: true,
            // onEnter: () => console.log("Section entered viewport"),
        });

        gsap.to(".mobile_projects-section", {
            scrollTrigger: scrollTrigger,
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
            translateX: 0,
        });
    }, []);

    return (
        <>
            <section className="mobile_projects-section">
                <h2 className="mobile_projects-title">PROJECTS</h2>
                <div className="mobile_projects-content-wrapper">
                    <ul className="mobile_projects-card-container">
                        <li className="mobile_projects-card">
                            <img
                                className="mobile_projects-card-image"
                                src="/pictures/Portfolio.webp"
                                alt=""
                            ></img>
                            <h3 className="mobile_projects-card-title">
                                WEB PORTFOLIO
                            </h3>
                            <div className="mobile_projects-card-info">
                                <h4 className="mobile_projects-card-info-title">
                                    INFO
                                </h4>
                                <p className="mobile_projects-card-info-text">
                                    I built this portfolio to showcase my work, reflect my tech journey, and connect with opportunities that align with my goals
                                </p>
                                <h4 className="mobile_projects-card-info-title">
                                    TECH STACK
                                </h4>
                                <p className="mobile_projects-card-info-text">
                                    HTML, CSS , JAVASCRIPT
                                </p>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://github.com/Bhoomiverma23/Portfolio"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons icon-github"
                                            src="/icons/github.png"
                                            alt="Open Github repository"
                                        />
                                        Repo
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="mobile_projects-card">
                            <img
                                className="mobile_projects-card-image"
                                src="/pictures/bhoomiportpolio.png"
                                alt=""
                            ></img>
                            <h3 className="mobile_projects-card-title">
                                Meme Quote Generator
                            </h3>
                            <div className="mobile_projects-card-info">
                                <h4 className="mobile_projects-card-info-title">
                                    INFO
                                </h4>
                                <p className="mobile_projects-card-info-text">
                                    A fun web app that displays random viral meme quotes with a click.
                                </p>
                                <h4 className="mobile_projects-card-info-title">
                                    TECH STACK
                                </h4>
                                <p className="mobile_projects-card-info-text">
                                    HTML , CSS , JAVASCRIPT
                                </p>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://bhoomiverma23.github.io/Meme-Quote-Generator/"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons"
                                            src="/icons/up-arrow.png"
                                            alt="Open website"
                                        />
                                        Live
                                    </button>
                                </a>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://github.com/Bhoomiverma23/Meme-Quote-Generator"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons icon-github"
                                            src="/icons/github.png"
                                            alt="Open Github repository"
                                        />
                                        Repo
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="mobile_projects-card">
                            <img
                                className="mobile_projects-card-image"
                                src="/pictures/meme.png"
                                alt=""
                            ></img>
                            <h3 className="mobile_projects-card-title">
                                To-Do List
                            </h3>
                            <div className="mobile_projects-card-info">
                                <h4 className="mobile_projects-card-info-title">
                                    INFO
                                </h4>
                                <p className="mobile_projects-card-info-text">
                                    A simple and interactive To-Do List app to add, delete, and manage daily tasks. Built using HTML, CSS, and JavaScript with local storage support.
                                </p>
                                <h4 className="mobile_projects-card-info-title">
                                    TECH STACK
                                </h4>
                                <p className="mobile_projects-card-info-text">
                                    HTML , CSS , JAVASCRIPT
                                </p>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://bhoomiverma23.github.io/TO-DO-List/"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons"
                                            src="/icons/up-arrow.png"
                                            alt="Open website"
                                        />
                                        Live
                                    </button>
                                </a>
                                <a
                                    className="mobile_projects-card-link"
                                    href="https://github.com/Bhoomiverma23/TO-DO-List"
                                    target="_blank"
                                >
                                    <button
                                        className="mobile_projects-card-button"
                                        onMouseEnter={playHoverSound}
                                        onClick={playClickSound}
                                    >
                                        <img
                                            className="mobile_projects-card-icons icon-github"
                                            src="/icons/github.png"
                                            alt="Open Github repository"
                                        />
                                        Repo
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li className="mobile_projects-card">
                            <img
                                className="mobile_projects-card-image"
                                src="/pictures/to-do.png"
                                alt=""
                            ></img>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default MobileProjects;
