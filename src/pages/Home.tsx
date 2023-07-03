import { useRecoilState } from "recoil";
import { tokenAtom } from "../atom/token";
import Header from "../components/Header";

const Home = () => {
    const [token, setToken] = useRecoilState(tokenAtom);

    const onChange = (event: any) => {
        setToken(event.target.value);
    };

    return (
        <>
            <Header />
            <h1>HOME Sayfası</h1>
            <br />
            <hr />
            <br />
            <input type="text" value={token as string} onChange={onChange} />
            <br />
        </>
    );
};

export default Home;
