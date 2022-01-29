import BaseContainer from "./components/BaseContainer";
import LessonsOverview from "./components/LessonsOverview";

function App() {
    return <BaseContainer>
        <div className="mt-3">
            <LessonsOverview />
        </div>
    </BaseContainer>
}

export default App;
