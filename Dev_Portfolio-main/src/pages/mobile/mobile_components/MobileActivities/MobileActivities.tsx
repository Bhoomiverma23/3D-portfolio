import "./MobileActivities.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const MobileActivities = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const scrollTrigger = ScrollTrigger.create({
            trigger: ".mobile_activities-section",
            scroller: ".mobile-content-wrapper",
            start: 400,
            // markers: true,
            // onEnter: () => console.log("Section entered viewport"),
        });

        gsap.to(".mobile_activities-section", {
            scrollTrigger: scrollTrigger,
            duration: 1,
            opacity: 1,
            filter: "blur(0px)",
            translateX: 0,
        });
    }, []);

    return (
        <>
            <section className="mobile_activities-section">
                <h2 className="mobile_activities-section-title">EXPERIENCE</h2>
                <h3 className="mobile_activities-section-subtitle">
                    IDEATHONS & HACKATHONS
                </h3>
                <ul className="mobile_activities-section-list">
                    <li className="mobile_activities-section-listitem">
                        <strong>Project Contributor, Ideathon, XENITH’25</strong>- Co-created “Harithpath,” a green energy urban solution.
                        <p className="desktop_activities-section-listitem-date">
                            2024
                        </p>
                    </li>
                    <li className="mobile_activities-section-listitem">
                        <strong>HealthTech Innovator, 0 to 1 Hackathon, IIIT Delhi</strong> - Freelance
                        <p className="desktop_activities-section-listitem-date">
                            2024
                        </p>
                    </li>
                </ul>
                <h3 className="mobile_activities-section-subtitle">
                    OTHER FIELDS
                </h3>
                <ul className="mobile_activities-section-list">
                    <li className="mobile_activities-section-listitem">
                        <strong>
                            PROJECT CONTRIBUTOR - GIRLSCRIPT SUMMER OF CODE 2025
                        </strong>{" "}
                        <p className="desktop_activities-section-listitem-date">
                            JULY 2025 - present
                        </p>
                    </li>
                    <li className="mobile_activities-section-listitem">
                        <strong>FULL STACKS DEVELOPMENT MENTEE - GRIFFENDEV COHORT at TECHNEEDS IGDTUW</strong> at{" "}
                        <p className="desktop_activities-section-listitem-date">
                            May 2025 - present
                        </p>
                    </li>
                    <li className="mobile_activities-section-listitem">
                        <strong>SOCIAL MEDIA COORDINATOR - PROTEGE IGDTUW</strong> at <strong>Veepee</strong>
                        <p className="desktop_activities-section-listitem-date">
                            Oct 2024 - present
                        </p>
                    </li>
                    <li className="mobile_activities-section-listitem">
                        <strong>LITERATURE REVIEW PAPER - CRIME PREDICTION USING MACHINE LEARNING</strong>{" "}
                        <p className="desktop_activities-section-listitem-date">
                            2024
                        </p>
                    </li>
                </ul>
            </section>{" "}
        </>
    );
};

export default MobileActivities;
