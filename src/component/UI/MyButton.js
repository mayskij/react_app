import React from 'react'
import { Button } from 'antd';

const MyButton = ({ children, ...props }) => {
   return (
      <Button type="primary" block {...props} className="butt">
         {children}
      </Button>
   )
}



export default MyButton
