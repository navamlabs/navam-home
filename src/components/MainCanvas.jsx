import React, { useEffect, useRef, useState } from "react";
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const MainCanvasSection = () => {
    const mainTitleRef = useRef(null);
    const [topContainerVisible, setTopContainerVisible] = useState(false);

    const { rive: titleRive, RiveComponent: TitleRiveComponent } = useRive({
        src: "rive/logotitle.riv",
        layout: new Layout({
            fit: Fit.FitHeight,
            alignment: Alignment.TopCenter,
        }),
        stateMachines: "State Machine 1",

    }, {
        shouldResizeCanvasToContainer: true
    });
    const { rive: waveRive, RiveComponent: WaveRiveComponent } = useRive({
        src: "rive/background_wave_anim.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.TopCenter,
        }),
        stateMachines: "State Machine 1",
    }, {
        shouldResizeCanvasToContainer: true
    });
    const { rive: logoRive, RiveComponent: LogoRiveComponent } = useRive({
        src: "rive/logo_anim.riv",
        layout: new Layout({
            fit: Fit.FitHeight
        }),
        autoplay: true,
    }, {
        shouldResizeCanvasToContainer: true
    });


    useEffect(() => {
        const callbackMainTitle = (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting && !topContainerVisible) {
                    setTopContainerVisible(true);
                    titleRive.play("State Machine 1");
                    logoRive.reset();
                }
                if (entry.isIntersecting && topContainerVisible) {
                    setTopContainerVisible(false);
                    titleRive.reset();
                    logoRive.play("initial");
                }
            });
        }
        const observerMaintitle = new IntersectionObserver(callbackMainTitle, {});
        mainTitleRef.current && observerMaintitle.observe(mainTitleRef.current);
        return () => mainTitleRef.current && observerMaintitle.unobserve(mainTitleRef.current);
    })

    const topContainerClass = topContainerVisible ? 'top-container non-glass start-reveal' : 'top-container non-glass';
    return <>

        <section className={topContainerClass}>
            <div className="header-logo">
                <div className="header-logo-title">
                    <TitleRiveComponent />
                </div>
            </div>
        </section>
        <section className="middle-container">
            <div className="logo-canvas-container">
                <LogoRiveComponent />
            </div>
            <div className="main-title" ref={mainTitleRef}>
                Empowering Businesses with Expert Consulting
            </div>
        </section>
        <section className="canvas-container">
            <WaveRiveComponent />
        </section>
    </>
}

export default MainCanvasSection;
