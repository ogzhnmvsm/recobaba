import { tokenAtom } from "../atom/token";
import { useRecoilValue } from "recoil";
import Header from "../components/Header";

const About = () => {
    const token = useRecoilValue<any>(tokenAtom);

    return (
        <>
            <Header />
            <h1>About Sayfası</h1>
            <br />
            <hr />
            <br />
            <div>
                <h4>TOKEN:</h4>
                <p>{token}</p>
            </div>
        </>
    );
};

export default About;
