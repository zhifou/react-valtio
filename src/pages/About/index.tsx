// pages/About/index.tsx
import { useSnapshot } from "valtio";
import Counter from "~/stores/counter";

const { countAtom } = Counter;

const About = () => {
    const snap = useSnapshot(Counter);

    return <div>About Page {snap.count}</div>;
};

export default About;
