import React from "react";

const Jumbotron = () => {
    return (
        <div>
            <div Classname="bg-light p-5 rounded-lg m-3">
                <h1 Classname="display-4">Hello, world!</h1>
                <p Classname="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr Classname="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a Classname="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
    );
}
export default Jumbotron