import React from 'react'

const Firstquestion = (props) => {

  const handleName = (e) => {
    props.setName(e.target.value)
    props.setError('')
  }

  return (
      <section className='question-section'>
       <label htmlFor='name' tabIndex={0}>Enter your name: </label>
        <input
           id='name'
           type='text'
           value={props.name}
           onChange={handleName}
        />
    </section>
  )
}

export default Firstquestion

