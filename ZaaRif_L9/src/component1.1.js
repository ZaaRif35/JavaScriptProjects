import useWindowWidth from "./component1";

export default function MyComponent() {
    const width = useWindowWidth();

    return (
        <div>
            <p>Window width is: {width}px</p>
        </div>
    )
}