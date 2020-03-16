import React from "react";
import FusePageCarded from "@fuse/core/FusePageCarded";

function IndexPage(props) {
    return (
        <FusePageCarded
            content={
                <div className="p-24">
                    <h4>Content</h4>
                </div>
            }
        />
    );
}

export default IndexPage;
