import React from 'react'

function alert(props) {
  return (
    props.alert && <>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert}</strong> 
</div>
    </>
  )
}

export default alert