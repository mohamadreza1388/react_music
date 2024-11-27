import Home from "../../components/Home.jsx";
import Container from "../../components/Container.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";
import Main from "../../components/main/Main.jsx";
import Logo from "../../components/sideBar/Logo.jsx";
import Line from "../../components/shared/Line.jsx";
import Group from "../../components/sideBar/Group.jsx";
import Item from "../../components/sideBar/Item.jsx";

export default function HomeLayouts() {

    return (
        <Container>
            <Home>
                <SideBar>
                    <Logo />
                    <Line />
                    <Group>
                        <Item to={"/"} title={"صفحه اصلی"} icon={"home"} />
                    </Group>
                    <Group title={"دسته بندی بر اساس"}>
                        <Item to={"/cvv"} title={"ژانر"}/>
                        <Item to={"/vcc"} title={"سبک"}/>
                        <Item to={"/vvv"} title={"خوانندگان"}/>
                        <Item to={"/vv"}/>
                    </Group>
                </SideBar>
                <Main>

                </Main>
            </Home>
        </Container>
    )
}