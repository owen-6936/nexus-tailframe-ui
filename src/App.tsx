import React from 'react';
import Card from './components/Card/Card';

function App() {
    return (
        <div className="px-6 py-4 bg-blue-500 text-white text-center">
            <h1>Hello from the App!</h1>
            <p>This is a test of Tailwind CSS.</p>
            <Card
                paddingRatio={{ x: 12, y: 1 }}
                bg="bg-white/10"
                rounded="2xl"
                border="md"
                borderStyle="solid"
            >
                <Card.Header title="Card Title" />
                <Card.Body>
                    This is an example of a card body. You can put any content
                    here, such as text, images, or other components.
                </Card.Body>
            </Card>
        </div>
    );
}

export default App;
