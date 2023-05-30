import React, {useState} from "react";
import { motion } from "framer-motion";

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)
    return  (
        <div>
            <motion.div
                key="compact-card"
                layout
                layoutId="compact-card"
                style={{ 
                    background: "#161616",
                    boxShadow: "0px 10px 20px 0px #F5F5F5",  
                    padding: "10px", margin: "10px" }}
            >
                {expanded ? "Expanded" : <CompactCard param={props} />}
            </motion.div>
            {expanded && (
                <motion.div
                    key="expanded"
                    layout
                    layoutId="expanded"
                    style={{ background: "white", padding: "10px", margin: "10px" }}
                >
                    Expanded content goes here
                </motion.div>
            )}
        </div>
    );
}

function CompactCard({param}){
    const Png = param.png;
    return(
        <div className="CompactCard">
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue} %`}
                />
            </div>
            <div className="detail">
                <Png/>
            </div>
        </div>
    )
}

export default Card