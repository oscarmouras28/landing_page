import React from "react";
const Jumbotron = () => {
    return (
        <div className="row d-flex justify-content-center py-2">
            <div className="col-8" style={{ background: "whitesmoke", widht: "75%", height: "250px", borderRadius:"5px"}}>
                <br />
                <div className="row">
                    <div className="col-12" >
                        <h1 style={{ fontSize: "70px" }}>A Warm Welcome!</h1>
                    </div>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                    </div>
                    <div className="mb-2">
                    <button type="button" class="btn btn-primary btn-lg">Large button</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Jumbotron