import React from 'react';
import { SketchPicker } from 'react-color';

import { List, Avatar, Divider } from 'antd';


const fakeData = [
    {
        name: 'Flood', family: 'Geophysical', description: 'trcs@mail.com', code: {
            "given": "NMA",
            "cap": "Geo"
        }, natural: "Natural", color: '#00a2ae'
    },
]

const IncidentDetails = (props) => {
    return (
        <div className="content scrollable">
            <List
                itemLayout="horizontal"
                dataSource={fakeData}
                renderItem={({ name, code, family, description, color, natural }) => (
                    <List.Item className="p-20">
                        <List.Item.Meta
                            avatar={<Avatar
                                style={{
                                    backgroundColor: color,
                                    verticalAlign: 'middle'
                                }} size="large">
                                {name.charAt(0)}
                            </Avatar>}
                            title={<div>
                                <span className="f-600 f-15">
                                    {name}
                                </span>
                                <Divider />
                            </div>
                            }
                            description={

                                <div>
                                    <h3><span style={{color:"#1890ff", paddingRight: "10px"}}>Nature:</span> {natural}</h3>
                                    <h4><span style={{color:"#1890ff", paddingRight: "10px"}}>Family:</span>{family}</h4>
                                    <Divider />
                                    <h3><span style={{color:"#1890ff", paddingRight: "10px"}}>Code:</span> {code.given}</h3>
                                    <h4><span style={{color:"#1890ff", paddingRight: "10px"}}>System:</span> {code.cap}</h4>
                                    <h3><span style={{color:"#1890ff", paddingRight: "10px"}}>CAP: </span>Version 1.2.0</h3>
                                    <Divider />
                                    <h3><span style={{color:"#1890ff", paddingRight: "10px",
                                }}>Description</span></h3>
                                    <p>{description}</p>
                                    <Divider />
                                    <div>
                                    <SketchPicker />
                                    
                                    </div>
                                
                                </div>
                            } />
                    </List.Item>
                )}
            />
        </div>
    )
}
export default IncidentDetails;