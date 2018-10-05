import { Form, Input } from 'antd';
import React from 'react';

/* local constants */
const FormItem = Form.Item;
const { TextArea } = Input;

export default function ActivityForm() {
  return (
    <Form>
      <FormItem>
        <TextArea
          autosize={{ minRows: 2, maxRows: 6 }}
          placeholder="Enter Activity Name"
        />
      </FormItem>
      {/* <Row> */}
      {/*   <Col span={24} style={{ textAlign: 'right' }}> */}
      {/*     <Button type="primary" htmlType="submit"> */}
      {/*       Search */}
      {/*     </Button> */}
      {/*     <Button style={{ marginLeft: 8 }}>Clear</Button> */}
      {/*   </Col> */}
      {/* </Row> */}
    </Form>
  );
}
