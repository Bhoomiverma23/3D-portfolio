import "./DesktopProjects.css";
import gsap from "gsap";
import { useEffect } from "react";
import useIframeStore from "../../../../stores/iframeStore";
import useHoverSound from "../../../../components/Extras/SoundEffects/hoverSound";
import useClickSound from "../../../../components/Extras/SoundEffects/clickSound";

const DesktopProjects = () => {
    //** Logic */
    const { showProjects, showExitAnimation, updateShowAnimation } =
        useIframeStore();
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    //** Style */
    useEffect(() => {
        if (showProjects) {
            gsap.to(".desktop_projects-section", {
                duration: 2,
                opacity: 1,
                // filter: "blur(0px)",
            });
            gsap.to(".desktop_projects-section", {
                duration: 1,
                filter: "blur(0px)",
            });
        }
    }, [showProjects]);

    useEffect(() => {
        if (showExitAnimation) {
            gsap.to(".desktop_projects-section", {
                duration: 1,
                opacity: 0,
            });
            updateShowAnimation("Enter");
        }
    }, [showExitAnimation, updateShowAnimation]);

    return (
        <>
            {showProjects && (
                <section className="desktop_projects-section">
                    <h2 className="desktop_projects-title">PROJECTS</h2>
                    <div className="desktop_projects-content-wrapper">
                        <ul className="desktop_projects-cards-container">
                            <li className="desktop_projects-card">
                                <div className="desktop_projects-card-textcontent">
                                    <h3 className="desktop_projects-card-title">
                                        WEB PORTFOLIO
                                    </h3>
                                    <div className="desktop_projects-card-info">
                                        <h4 className="desktop_projects-card-info-title">
                                            INFO
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            I built this portfolio to showcase my work, reflect my tech journey, and connect with opportunities that align with my goals
                                        </p>
                                        <h4 className="desktop_projects-card-info-title">
                                             TECH STACK
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            HTML , CSS , JAVASCRIPT
                                        </p>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://github.com/Bhoomiverma23/Portfolio"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons icon-github"
                                                    src="/icons/github.png"
                                                    alt="Open Github repository"
                                                />
                                                Repo
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/bhoomiportpolio.png"
                                    alt=""
                                ></img>
                            </li>
                            <li className="desktop_projects-card">
                                <div className="desktop_projects-card-textcontent">
                                    <h3 className="desktop_projects-card-title">
                                        Meme Quote Generator
                                    </h3>

                                    <div className="desktop_projects-card-info">
                                        <h4 className="desktop_projects-card-info-title">
                                            INFO
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            A fun web app that displays random viral meme quotes with a click.
                                        </p>
                                        <h4 className="desktop_projects-card-info-title">
                                            TECH STACK
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            HTML , CSS , JAVASCRIPT
                                        </p>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://bhoomiverma23.github.io/Meme-Quote-Generator/"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons"
                                                    src="/icons/up-arrow.png"
                                                    alt="Open website"
                                                />
                                                Live
                                            </button>
                                        </a>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://github.com/Bhoomiverma23/Meme-Quote-Generator"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons icon-github"
                                                    src="/icons/github.png"
                                                    alt="Open Github repository"
                                                />
                                                Repo
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/meme.png"
                                    alt=""
                                ></img>
                            </li>
                            <li className="desktop_projects-card">
                                <div className="desktop_projects-card-textcontent">
                                    <h3 className="desktop_projects-card-title">
                                        To-Do List
                                    </h3>
                                    <div className="desktop_projects-card-info">
                                        <h4 className="desktop_projects-card-info-title">
                                            INFO
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            A simple and interactive To-Do List app to add, delete, and manage daily tasks. Built using HTML, CSS, and JavaScript with local storage support.
                                        </p>
                                        <h4 className="desktop_projects-card-info-title">
                                            TECH STACK
                                        </h4>
                                        <p className="desktop_projects-card-info-text">
                                            HTML , CSS , JAVASCRIPT
                                        </p>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://bhoomiverma23.github.io/TO-DO-List/"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons"
                                                    src="/icons/up-arrow.png"
                                                    alt="Open website"
                                                />
                                                Live
                                            </button>
                                        </a>
                                        <a
                                            className="desktop_projects-card-link"
                                            href="https://github.com/Bhoomiverma23/TO-DO-List"
                                            target="_blank"
                                        >
                                            <button
                                                className="desktop_projects-card-button"
                                                onMouseEnter={playHoverSound}
                                                onClick={playClickSound}
                                            >
                                                <img
                                                    className="desktop_projects-card-icons icon-github"
                                                    src="/icons/github.png"
                                                    alt="Open Github repository"
                                                />
                                                Repo
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <img
                                    className="desktop_projects-card-image"
                                    src="/pictures/to-do.png"
                                    alt=""
                                ></img>
                            </li>
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
};

export default DesktopProjects;
