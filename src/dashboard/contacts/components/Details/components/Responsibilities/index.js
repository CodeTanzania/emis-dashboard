import { List } from 'antd';
import React from 'react';
/* import component */
import Responsibility from './Responsibility';


// fake data
const fakeData = [
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
  { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolore aliquid? Autem id, amet tempore vitae animi quae veniam tenetur dolorum fugiat maxime repudiandae eum saepe accusamus voluptates placeat dicta.' },
];


/**
 * Render Contacts List
 *
 * @function
 * @name ContactList
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ContactsList() {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={fakeData}
        renderItem={item => (<Responsibility {...item} />)}
      />
    </div>
  );
}
