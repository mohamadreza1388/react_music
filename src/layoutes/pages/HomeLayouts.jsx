import Home from "../../components/Home.jsx";
import Container from "../../components/Container.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import Main from "../../components/main/Main.jsx";
import Logo from "../../components/sideBar/Logo.jsx";
import Line from "../../components/shared/Line.jsx";

export default function HomeLayouts() {

    return (
        <Container>
            <Home>
                <SideBar>
                    <Logo />
                    <Line />
                </SideBar>
                <Main>

                </Main>
            </Home>
        </Container>
    )
}