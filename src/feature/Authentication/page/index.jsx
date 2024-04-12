import {Outlet} from "react-router-dom";
import {Container} from "@/feature/Authentication/styled.js";

const Authentication = () => {
    return (
        <Container>
            <Outlet/>
        </Container>
    );
};

export default Authentication;