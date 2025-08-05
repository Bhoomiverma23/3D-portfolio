import gsap from "gsap";
import { useEffect } from "react";
import useIframeStore from "../../../../stores/iframeStore";
import "./DesktopActivities.css";

const DesktopActivities = () => {
    //** Logic */
    const { showActivities, showExitAnimation, updateShowAnimation } =
        useIframeStore();

    //** Style */
    useEffect(() => {
        if (showActivities) {
            gsap.to(".desktop_activities-section", {
                duration: 1,
                opacity: 1,
            });
            gsap.to(".desktop_activities-section", {
                duration: 1,
                opacity: 1,
                filter: "blur(0px)",
            });
        }
    }, [showActivities]);

    useEffect(() => {
        if (showExitAnimation) {
            gsap.to(".desktop_activities-section", { duration: 1, opacity: 0 });
            updateShowAnimation("Enter");
        }
    }, [showExitAnimation, updateShowAnimation]);

    return (
        <>
            {showActivities && (
                <section className="desktop_activities-section">
                    <h2 className="desktop_activities-section-title">
                        EXPERIENCE
                    </h2>
                    <h3 className="desktop_activities-section-subtitle">
                        IDEATHONS & HACKATHONS
                    </h3>
                    <ul className="desktop_activities-section-list">
                        <li className="desktop_activities-section-listitem">
                            <strong>Project Contributor, Ideathon, XENITH’25 </strong> - Co-created “Harithpath,” a green energy urban 
solution.
                            <p className="desktop_activities-section-listitem-date">
                                2024
                            </p>
                        </li>
                        <li className="desktop_activities-section-listitem">
                            <strong>HealthTech Innovator, 0 to 1 Hackathon, IIIT Delhi</strong> -  Built “Clinix-AI” using AI for health 
monitoring with facial analysis and OCR.
                            <p className="desktop_activities-section-listitem-date">
                                2024
                            </p>
                        </li>
                    </ul>
                    <h3 className="desktop_activities-section-subtitle">
                        OTHER FIELDS
                    </h3>
                    <ul className="desktop_activities-section-list">
                        <li className="desktop_activities-section-listitem">
                            <strong>
                                PROJECT CONTRIBUTOR  
                            </strong>{" "}
                             <strong>- GIRLSCRIPT SUMMER OF CODE 2025</strong>
                            <p className="desktop_activities-section-listitem-date">
                                JULY 2025 - present
                            </p>
                        </li>
                        <li className="desktop_activities-section-listitem">
                            <strong>FULL STACKS DEVELOPMENT MENTEE - GRIFFENDEV COHORT</strong> at{" "}
                            <strong>TECHNEEDS IGDTUW</strong>
                            <p className="desktop_activities-section-listitem-date">
                                May 2025 - present
                            </p>
                        </li>
                        <li className="desktop_activities-section-listitem">
                            <strong>SOCIAL MEDIA COORDINATOR</strong> {" "}
                            <strong>- PROTEGE IGDTUW</strong>
                            <p className="desktop_activities-section-listitem-date">
                                Oct 2024 - present
                            </p>
                        </li>
                        <li className="desktop_activities-section-listitem">
                            <strong>LITERATURE REVIEW PAPER - CRIME PREDICTION USING MACHINE LEARNING</strong>{" "}
                            <p className="desktop_activities-section-listitem-date">
                               2024
                            </p>
                        </li>
                    </ul>
                </section>
            )}
        </>
    );
};

export default DesktopActivities;
