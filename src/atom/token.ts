import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const tokenAtom = atom({
    key: "token",
    default: "default",
    effects_UNSTABLE: [persistAtom],
});

export { tokenAtom };
