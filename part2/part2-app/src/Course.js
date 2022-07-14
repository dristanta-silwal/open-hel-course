import React from 'react';

// Subcomponent to display course name
const Header = ({name}) => <h2>{name}</h2>;

// Subcomponent to display the name of a part and the number of exercises in it
const Part = ({part}) => <p>{part.name} {part.exercises}</p>;

// Subcomponent to display information about all the parts of a course
const Content = ({parts}) => {
    const total = parts.reduce((sum, currentPart) => sum + currentPart.exercises, 0);

    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
            <p><strong>total of {total} exercises</strong></p>
        </div>
    );
};


const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};

export default Course;