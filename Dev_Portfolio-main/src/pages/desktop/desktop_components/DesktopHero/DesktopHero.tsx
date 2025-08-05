import "./DesktopHero.css";
import { useEffect } from "react";
import gsap from "gsap";
import useIframeStore from "../../../../stores/iframeStore";
import useHoverSound from "../../../../components/Extras/SoundEffects/hoverSound";
import useClickSound from "../../../../components/Extras/SoundEffects/clickSound";

const DesktopHero = () => {
    //** Logic */
    const { showDesktopIntro, updateShowDesktopIntro, updateShowPage } =
        useIframeStore();
    const playHoverSound = useHoverSound();
    const playClickSound = useClickSound();

    const handleStartActions = () => {
        playClickSound();
        gsap.to(".desktop_hero-container", {
            duration: 1,
            opacity: 0,
            delay: 0.3,
        });
        setTimeout(() => {
            updateShowDesktopIntro(false);
            updateShowPage("About");
        }, 1250);
    };

    //** Style */

    useEffect(() => {
        if (showDesktopIntro) {
            gsap.to(".desktop_hero", { duration: 4, opacity: 1, delay: 1 });
        }
    }, [showDesktopIntro]);

    return (
        <>
            {showDesktopIntro && (
                <div className="desktop_hero-container">
                    <section className="desktop_hero">
                        <h1 className="desktop_hero-title">Hey,</h1>
                        <h1 className="desktop_hero-title2">I'm Bhoomi Verma</h1>
                        <p className="desktop_hero-subtext">Welcome onboard.</p>
                        <p className="desktop_hero-intro-text">
                            Let’s explore my journey, passions, and the impact I strive to create through my work.
                        </p>
                        <button
                            className="desktop_hero-button"
                            onMouseEnter={playHoverSound}
                            onClick={handleStartActions}
                        >
                            START
                            <div className="hero-button-disc-primary">
                                <div className="hero-button-disc-top"></div>
                                <div className="hero-button-disc-bottom"></div>
                            </div>
                        </button>
                    </section>
                </div>
            )}
        </>
    );
};

export default DesktopHero;
