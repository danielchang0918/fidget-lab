import PlaygroundCard from "../components/PlaygroundCard";

function Home(){
    return (
        <div>
            <h2>Choose your playground</h2>

            <PlaygroundCard 
                title="Typing Playground"
                description="Make letters fly!"
            />

            <PlaygroundCard 
                title="Balloon Pop"
                description="Pop some balloons!"
            />

            <PlaygroundCard 
                title="Bouncing Balls"
                description="Watch them bounce!"
            />

            <PlaygroundCard 
                title="Doodle Board"
                description="Draw anything!"
            />
        </div>
    );
}

export default Home;