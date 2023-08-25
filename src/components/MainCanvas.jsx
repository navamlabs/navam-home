import React, { useEffect, useRef, useState } from "react";
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const MainCanvasSection = () => {
    const mainTitleRef = useRef(null);
    const [topContainerVisible, setTopContainerVisible] = useState(true);
    const [titleAnimationVisiable, setTitleAnimationVisiable] = useState(false);

    const { titleRive, RiveComponent: TitleRiveComponent } = useRive({
        src: "/rive/logotitle.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
        }),
        stateMachines: "State Machine 1",

    });
    const { waveRive, RiveComponent: WaveRiveComponent } = useRive({
        src: "/rive/background_wave_anim.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.TopCenter,
        }),
        stateMachines: "State Machine 1",
    });
    const { logoRive, RiveComponent: LogoRiveComponent } = useRive({
        src: "/rive/logo_anim.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.FitWidth
        }),
        stateMachines: "initial",
    });

    const callbackMainTitle = (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting && !topContainerVisible) {
                setTopContainerVisible(true);
                setTitleAnimationVisiable(true);
                const logo_title_r = new rive.Rive({
                    src: "rive/logotitle.riv",
                    autoplay: true,
                    canvas: document.getElementById("logo-title-canvas"),
                    layout: new rive.Layout({
                        fit: rive.Fit.Cover,
                    }),
                    stateMachines: "State Machine 1",
                    useOffscreenRenderer: true,
                    onLoad: () => {
                        r1.resizeDrawingSurfaceToCanvas();
                    }
                });
            }
            if (entry.isIntersecting && topContainerVisible) {
                setTopContainerVisible(false);
                setTitleAnimationVisiable(false);
            }
        });
    }

    useEffect(() => {
        let observerMaintitle = new IntersectionObserver(callbackMainTitle, {});
        mainTitleRef.ref && observerMaintitle.observe(mainTitleRef.ref);
    })

    const topContainerClass = topContainerVisible ? 'top-container non-glass start-reveal' : 'top-container non-glass';
    return <>

        <section className={topContainerClass}>
            <div className="header-logo">
                <div className="header-logo-title">
                    {titleAnimationVisiable && <TitleRiveComponent />}
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
