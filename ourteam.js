import "./ourteam.css";
import SimpleImageSlider from "react-simple-image-slider";


function OurTeam() {

    const images = [
        { url: "https://media.istockphoto.com/id/512174497/photo/indian-family-portrait.jpg?s=612x612&w=0&k=20&c=TtXU5KuTsEUQqmPX4Wabzn1uL8EWN4nKcf6gqK37_sQ=" },
        { url: "https://media.istockphoto.com/id/492703086/photo/poor-indian-children-asking-for-food-india.jpg?s=612x612&w=0&k=20&c=4jiY_NHsZtPNFxsOD1NEIPSAGO3o1k_nPAaSERrtPHk=" },
        { url: "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=" },
        { url: "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=" },
        { url: "https://media.istockphoto.com/id/495698527/photo/delhi-street-scene.jpg?s=612x612&w=0&k=20&c=sqoFnAbWGSh4_oVX4P-ntBoMV8CUfFaNr6pBq-L9etM=" },
        { url: "https://media.istockphoto.com/id/1279988363/photo/female-textile-workers-standing-together-in-solidarity-at-factory.jpg?s=612x612&w=0&k=20&c=owiqqVaRxO6xaQVASeS7dCNXMLqI3_CaCSojMApMOVY=" },
        { url: "https://media.istockphoto.com/id/175600639/photo/a-mother-with-her-little-girl-on-the-arm.jpg?s=612x612&w=0&k=20&c=un4Jp_iyL7zlJ76Uq-cwZJOID57Zb7_EtaLFbg2Nz6A=" },
        { url: "https://media.istockphoto.com/id/1060352206/photo/donate-food-to-hungry-people-concept-of-poverty-and-hunger.jpg?s=612x612&w=0&k=20&c=BB37IPajPeKo8fsJ3m7z2TOUmCbD0nnJo79ZXBg89sM=" },
        { url: "https://media.istockphoto.com/id/1375910075/photo/two-girl-kids-with-books-and-bricks-on-each-other-head-looking-at-camera-concept-poverty-and.jpg?s=612x612&w=0&k=20&c=jpBMmDZ0QJArmz0VhE6K-YTf0GCsI_enYkZICADp2GA=" },
        { url: "https://media.istockphoto.com/id/1130936114/photo/doctor-doing-social-service-in-village.jpg?s=612x612&w=0&k=20&c=lRbY3SWBNMZB4oXpDnGTGQCTSta8yS4OKQyKj8ltn6A=" },
        { url: "https://media.istockphoto.com/id/1252924066/photo/poor-indian-children-asking-for-help.jpg?s=612x612&w=0&k=20&c=iCfnyEJBALdrB8D_EZ0CI1lDgDHMZ8yCbwua6eNyEQ8=" }
    ];



    return (

        <>
            <img src="https://images.pexels.com/photos/3576683/pexels-photo-3576683.jpeg?auto=compress&cs=tinysrgb&w=600" width={1100} height={1110} /><br />
            <img src="https://media.istockphoto.com/id/1155705365/vector/abstract-black-background-gradient-that-looks-modern.jpg?s=612x612&w=0&k=20&c=kNHfOPdB6TjbRagCcDd6kgZx5SbBEnaB4TL8Ru3zEaY=" width={1100} height={550} /><br />
            <img src="https://media.istockphoto.com/id/1350026384/photo/dark-red-defocused-blurred-motion-abstract-background.jpg?s=612x612&w=0&k=20&c=ZMOvQwiHd_r2NXcGmttRD29Kwmrg3LeYnW75fcuuZ2c=" width={1100} height={420} />

            <div className="move" style={{ width: 700 }}>

                <div className="top-head">
                    <h2>MEET OUR TEAM</h2>
                    <p>Paristhiti Foundation Working Community</p>
                </div>

                <div className="container" style={{ backgroundColor: "white" }} >
                    <div className="row">
                        <div className="col-7" style={{ paddingLeft: 25 }}>
                            <h1 className="xlarge-font"><b>BHUSNAM SAITEJA</b></h1>
                            <h1 className="large-font" style={{ color: "#800000" }}><b>PRESIDENT AND FOUNDER</b></h1>
                            <p className="para">Saiteja a native of Telangana is an Indian social activist
                                and community researcher who led the fiundation piller of Paristhiti Foundation
                                in 2012 to promote better life for all migrent worker, increase government
                                transparency,give better education to needy person, providing seltor to imigrant.
                                Trying hard to eleminate hunger and homelessness.
                            </p>

                            <button className="button">LETS CONNECT</button>
                        </div>
                        <div className="col-5" style={{ paddingLeft: 30 }} >
                            <img src="https://media.istockphoto.com/id/1212173144/photo/black-and-white-portrait-of-a-man-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=I8RLsAvH-5H4-g1lfqtnngtImgIAMvlVccVMNQF4Xco="
                                width={240} height={310} />
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-5" style={{ paddingLeft: 25 }}>
                            <img src="https://media.istockphoto.com/id/669284718/photo/black-and-white-portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=8UvVFHZZvepOfgejpuvDABXjGbvLLdS7n8B8iZmkKeg=" alt="App" width={250} height={290} />
                        </div>
                        <div className="col-7" style={{ paddingLeft: 25 }}>
                            <h1 className="xlarge-font" style={{ color: "white" }}><b>SURAJ SARANG</b></h1>
                            <h1 className="large-font" style={{ color: "#800000" }}><b>VICE-PRESIDENT AND CO-FOUNDER</b></h1>
                            <p className="para" style={{ color: "white" }}>Suraj Sarang a native of Bihar is an Indian social activist
                                and community researcher who led the fiundation piller of Paristhiti Foundation
                                in 2012 to promote better life for all migrent worker, increase government transparency.
                                Helping people in different state.
                            </p>
                            <button className="button" style={{ backgroundColor: "#800000" }}>LETS CONNECT</button>
                        </div>
                    </div>
                </div>


                <div className="container" style={{ backgroundColor: "white" }}>
                    <div className="row">
                        <div className="col-7" style={{ paddingLeft: 25 }}>
                            <h1 className="xlarge-font"><b>PUSPA PARIHAR</b></h1>
                            <h1 className="large-font" style={{ color: "#800000" }}><b>SECERECTRY AND CO-FOUNDER</b></h1>
                            <p className="para">Pushpa Parihar a native of Maharastra is an Indian social
                                activist and community researcher who led the fiundation piller of Paristhiti
                                Foundation in 2012 to promote better life for all migrent worker, increase
                                government transparency.Also working for women and there rights in rural and suburban area of India.</p>
                            <button className="button">LETS CONNECT</button>
                        </div>
                        <div className="col-5" style={{ paddingLeft: 30 }}>
                            <img src="https://media.istockphoto.com/id/163641847/photo/professional-asian-woman-portrait.jpg?s=612x612&w=0&k=20&c=e-RR8Ir1hHje5R5GMYk8HOMtSJoF1hHHwR9npu6lTY0=" width={240} height={310} />
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="para-work">
                    <h2>WORK  STRUCTURE</h2>
                    <p>Paristhiti Foundation have a flexible work structure with divisional or multidivisional
                        structure,we have our small team in every district were we are presently working
                        which connects to state level team and that goes to national level team and finally
                        to working community.Divisions may also be designated geographically in addition to specializationWith thousands
                        of volenture and lines of helping people, the structures itself so each
                        team unit operates as its own way with its own leader.

                        Putting an organizational structure in place is very beneficial to our Foundation.
                        The structure not only defines a hierarchy but also allows the firm to
                        lay out the pay structure for its worker. By putting the organizational
                        structure in place, the firm can decide salary grades and ranges for each
                        position.

                        The structure also makes operations more efficient and much more effective.
                        By separating worker and functions into different departments,
                        the foundation can perform different operations at once seamlessly.</p>
                </div>
                <br></br>
                <div className="lower-div">
                    <div style={{ padding: 15 }}>
                        <SimpleImageSlider
                            width={660}
                            height={380}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                </div>
                <div className="happy">
                    <h1> HAPPY TO HELP !!</h1>
                </div>

            </div>
        </>
    );
}
export default OurTeam;