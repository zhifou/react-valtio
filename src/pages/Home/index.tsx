// pages/Home/index.tsx
import { useSnapshot } from "valtio";
import Counter from "~/stores/counter";

const Home = () => {
    const snap = useSnapshot(Counter);

    return (
        <div>
            <div>Home Page</div>
            <button onClick={() => ++Counter.count}>
                counter: {snap.count}
            </button>
        </div>
    );
};

export default Home;
