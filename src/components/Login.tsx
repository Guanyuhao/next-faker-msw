"use client";
import { useCallback, useState, type FC, useEffect, useContext } from "react";
import { Button, Space, List, Avatar } from "@arco-design/web-react";
import axios from "axios";
interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [data1, setData1] = useState<any>([]);

  const handleCreatedBtnClick = useCallback(() => {
    axios.post("/api/user").then(({ data }) => {
      setData1([data, ...data1]);
    });
  }, [data1]);

  return (
    <Space className={'bg-white ml-[20px] pl-[20px]'}>
      <Button type="primary" onClick={handleCreatedBtnClick}>
        创建一个用户
      </Button>
      <List
        style={{"width": "600px"}}
        className={'max-h-[320px]'}
        dataSource={data1}
        render={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
                avatar={
                    <Avatar shape="square">
                        <img alt="avatar" src={item.avatar} />
                    </Avatar>
                }
                title={`${item.firstName} ${item.lastName}`}
                description={item.email}
            />
          </List.Item>
        )}
      />
    </Space>
  );
};

export default Login;
