import { createContext, useContext } from "react";

// 1. Create context
const DemoContext = createContext("Demo context")

const DemoProps = () => {
	// 2. Provider
    const myValue = "Hello from main";
    return (
		<DemoContext.Provider value={myValue}>
			<ComponentA></ComponentA>
		</DemoContext.Provider>
	);
}

const ComponentA = () => {
    return <ComponentB></ComponentB>;
}

const ComponentB = () => {
    return <ComponentC ></ComponentC>;
}

const ComponentC = () => {
	// 3. Consumer
	const value = useContext(DemoContext);
    return <h3>{value}</h3>;
}

export default DemoProps