import React from 'react'
import { Input } from 'antd';

const MyInput = React.forwardRef((props, ref) => {

   const { TextArea } = Input;

   return (
      <div>
         <TextArea
            ref={ref} className="input" {...props}
            autoSize={{ minRows: 2, maxRows: 6 }} />
         <div style={{ margin: '24px 0' }} />
      </div>
   )
})


export default MyInput
