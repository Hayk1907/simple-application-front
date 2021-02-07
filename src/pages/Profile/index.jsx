import React from 'react';
import {List, Avatar, Button} from 'antd';
import {ProfileWrapper, ListWrapper} from './styles';

function Profile() {
  const data = [
    {
      title: 'Workspace 1',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Workspace 2',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Workspace 3',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    },
    {
      title: 'Workspace 4',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team'
    }
  ];
  return (
    <ProfileWrapper>
      <h1>You workspaces</h1>
      <ListWrapper
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />

      <Button type="primary">Create new Workspace</Button>
    </ProfileWrapper>
  );
}

export default Profile;
