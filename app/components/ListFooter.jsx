import React from 'react';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px 16px',
  borderTop: '1px solid #dfe4e8'
}

export default function ListFooter(props) {
  return <div style={style}>{props.children}</div>
}
