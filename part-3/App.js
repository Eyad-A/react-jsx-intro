function App() {
    return (
        <div>

            <Person
                name="Bob"
                age={22}
                hobbies={["Skateboarding", "playing music"]}
            />

            <Person
                name="Mary"
                age={31}
                hobbies={["Reading", "hiking"]}
            />

            <Person
                name="Joe"
                age={17}
                hobbies={["Walking", "listening to music"]}
            />

        </div>
    );
}